import {
  HasuraDeleteEvent,
  HasuraInsertEvent,
  HasuraUpdateEvent,
  TrackedHasuraEventHandler
} from '@golevelup/nestjs-hasura';
import { Injectable, Logger } from '@nestjs/common';

import { Recurring } from '../sdk/sdk';
import { RecurringService } from './recurring.service';

@Injectable()
export class RecurringEventsService {
  constructor(private recurringService: RecurringService) {}

  private readonly logger = new Logger(RecurringEventsService.name);

  @TrackedHasuraEventHandler({
    schema: 'public',
    tableName: 'recurring',
    triggerName: 'recurring-create',
    definition: {
      type: 'insert',
    },
  })
  recurringCreated(evt: HasuraInsertEvent<any>) {
    console.log(evt.event.data.new);
    this.recurringService.addItem(evt.event.data.new);
  }

  @TrackedHasuraEventHandler({
    schema: 'public',
    tableName: 'recurring',
    triggerName: 'recurring-updated',
    definition: {
      type: 'update',
    },
  })
  recurringUpdated(evt: HasuraUpdateEvent<Recurring>) {
    if (evt.event.data.old.active && !evt.event.data.new.active) {
      this.recurringService.deactivateItem(
        evt.event.data.new.id,
        evt.event.data.old.title,
      );
      return;
    }

    this.recurringService.updateItem(
      evt.event.data.old.title,
      evt.event.data.new,
    );
  }

  @TrackedHasuraEventHandler({
    schema: 'public',
    tableName: 'recurring',
    triggerName: 'recurring-deleted',
    definition: {
      type: 'delete',
    },
  })
  recurringDeleted(evt: HasuraDeleteEvent<any>) {
    this.recurringService.deactivateItem(
      evt.event.data.old.id,
      evt.event.data.old.title,
    );
  }
}
