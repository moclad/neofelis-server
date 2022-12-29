import dayjs from 'dayjs';

// import { Rule, Schedule } from '../sdk/rschedule';
import { Recurring, Transactions_Insert_Input } from './sdk';

export const getCronPattern = (recurring: Recurring): string => {
  let pattern = '';
  const startOn = dayjs(recurring.start_on, 'YYYY-MM-DD', true);

  switch (recurring.cycle_type) {
    case 2:
      pattern = `0 0 ${startOn.date()} */3 *`;
      break;
    case 3:
      pattern = `0 0 ${startOn.date()} */6 *`;
      break;
    case 4:
      pattern = `0 0 ${startOn.date()} ${startOn.month() + 1}  *`;
      break;
    default:
      pattern = `0 0 ${startOn.date()} * *`;
      break;
  }

  return pattern;
};

export const getTransactionFromRecurring = (
  recurring: Recurring,
): Transactions_Insert_Input => {
  let date = new Date();

  const dayOfWeek = dayjs(date).day();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    date = dayjs(date).day(1).toDate();
  }

  const transaction: Transactions_Insert_Input = {
    amount: recurring.amount,
    category_id: recurring.category_id,
    description: recurring.title,
    recurring_id: recurring.id,
    transaction_date: dayjs(date).format('YYYY-MM-DD'),
    account_from: recurring.account_from,
    account_to: recurring.account_to,
    transaction_type: recurring.transaction_type,
  };

  const source = {
    account_id: recurring.account_from,
    amount: recurring.amount * -1,
  };

  const target = {
    account_id: recurring.account_to,
    amount: recurring.amount,
  };

  const submitData = {
    ...transaction,
    transaction_labels: { data: [] },
    transaction_accounts: { data: [source, target] },
    amount: recurring.amount,
  };

  if (recurring.recurring_labels.length > 0) {
    recurring.recurring_labels.forEach((l) =>
      submitData.transaction_labels.data.push({ label_id: l.label_id }),
    );
  }

  return submitData;
};
