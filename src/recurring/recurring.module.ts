import { GraphQLClientInject } from '@golevelup/nestjs-graphql-request';
import { Module } from '@nestjs/common';

import { SdkModule } from '../sdk/sdk.module';
import { RecurringEventsService } from './recurring.events.service';
import { RecurringResolver } from './recurring.resolver';
import { RecurringService } from './recurring.service';

@Module({
  imports: [SdkModule],
  providers: [RecurringResolver, RecurringService, RecurringEventsService],
})
export class RecurringModule {}
