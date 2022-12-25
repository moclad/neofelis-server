import { CronJob } from 'cron';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekday from 'dayjs/plugin/weekday';
import { gql } from 'graphql-request';

import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry, Timeout } from '@nestjs/schedule';

import { Schedule } from '../sdk/rschedule';
import { Notifications_Insert_Input, Recurring, Transactions_Insert_Input } from '../sdk/sdk';
import { GqlSdk, InjectSdk } from '../sdk/sdk.module';
import { getCronPattern, getTransactionFromRecurring } from '../sdk/utils';

gql`
  query getRecurringItems {
    recurring(where: { active: { _eq: true } }) {
      id
      account_from
      account_to
      amount
      category_id
      created_at
      cycle_type
      description
      duration_type
      no_of_times
      start_on
      title
      transaction_type
      until_date
      updated_at
      recurring_labels {
        label_id
      }
      transactions_aggregate {
        aggregate {
          count
          max {
            transaction_date
          }
        }
      }
    }
  }
`;

gql`
  mutation insertTransaction($object: transactions_insert_input!) {
    insert_transactions_one(object: $object) {
      id
      amount
    }
  }
`;

gql`
  mutation insertNotification($object: notifications_insert_input!) {
    insert_notifications_one(object: $object) {
      id
    }
  }
`;

@Injectable()
export class RecurringService {
  constructor(
    @InjectSdk() private readonly sdk: GqlSdk,
    private schedulerRegistry: SchedulerRegistry,
  ) {
    dayjs.extend(customParseFormat);
    dayjs.extend(weekday);
  }

  private readonly logger = new Logger(RecurringService.name);

  private addCronJob(item: Recurring): void {
    const pattern = getCronPattern(item);

    const job = new CronJob(pattern, () => {
      const submitData = getTransactionFromRecurring(item);

      this.sdk.insertTransaction({
        object: submitData,
      });

      const notificationData: Notifications_Insert_Input = {
        description: `Recurring: ${item.title}`,
        title: 'Automated transaction',
      };

      this.sdk.insertNotification({
        object: notificationData,
      });
    });

    this.schedulerRegistry.addCronJob(`${item.id}-${item.title}`, job);
    job.start();
  }

  public deactivateItem(id: number, title: string): void {
    const jobName = `${id}-${title}`;

    if (this.schedulerRegistry.doesExist('cron', jobName)) {
      this.schedulerRegistry.deleteCronJob(`${id}-${title}`);
    }
  }

  public updateItem(title: string, item: Recurring): void {
    this.schedulerRegistry.deleteCronJob(`${item.id}-${title}`);
    this.addCronJob(item);
  }

  public addItem(item: Recurring): void {
    this.addCronJob(item);
  }

  doSomething(items: any) {
    items?.then((data) => {
      data.recurring.forEach((x) => {
        console.log('---------------------------', x.title, x.amount);

        const schedule = new Schedule({
          rrules: [
            {
              frequency: 'MONTHLY',
              start: dayjs(x.start_on, 'YYYY-MM-DD', true).toDate(),

              //count: 48,
              end: new Date(),
            },
          ],
        });

        const scheduleDates = schedule
          .occurrences()
          .toArray()
          .map(({ date }) => date.toString());

        scheduleDates.forEach((d) => {
          console.log(dayjs(d).format('YYYY-MM-DD'));
          const transaction: Transactions_Insert_Input = {
            amount: x.amount,
            category_id: x.category_id,
            description: x.title,
            recurring_id: x.id,
            account_from: x.account_from,
            account_to: x.account_to,
            transaction_date: dayjs(d).format('YYYY-MM-DD'),
            transaction_type: x.transaction_type,
          };

          const source = {
            account_id: x.account_from,
            amount: x.amount * -1,
          };

          const target = {
            account_id: x.account_to,
            amount: x.amount,
          };

          const submitData = {
            ...transaction,
            transaction_labels: { data: [] },
            transaction_accounts: { data: [source, target] },
            amount: x.amount,
          };

          if (x.recurring_labels.length > 0) {
            x.recurring_labels.forEach((l) =>
              submitData.transaction_labels.data.push({ label_id: l.label_id }),
            );
          }

          this.sdk.insertTransaction({
            object: submitData,
          });
        });
      });
    });
  }

  @Timeout(1000)
  handleTimeout() {
    const recurringItems = this.sdk.getRecurringItems();

    //const emailQueue = new Bull('EmailQueue');

    recurringItems
      .then((data) => {
        data.recurring.forEach((item) => {
          this.addCronJob(item as Recurring);
          // emailQueue.add(item);
        });
      })
      .catch((onError) => {
        const submitData: Notifications_Insert_Input = {
          description: onError,
          title: 'Exception thrown',
        };

        this.sdk.insertNotification({
          object: submitData,
        });
      })
      .finally(() => {
        // emailQueue.process(async (job) => {
        // console.log(job.data);
        // });
      });
  }

  @Timeout(5000)
  handleTimeout2() {
    const jobs = this.schedulerRegistry.getCronJobs();
    jobs.forEach((value, key) => {
      let next;
      try {
        next = value.nextDates(3);
      } catch (e) {
        next = 'error: next fire date is in the past!';
      }

      this.logger.log(`job: ${key} -> next: ${next}`);
    });
  }
}
