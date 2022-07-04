import { Module } from '@nestjs/common';
import { RecurringService } from './recurring.service';
import { RecurringResolver } from './recurring.resolver';

@Module({
  providers: [RecurringResolver, RecurringService]
})
export class RecurringModule {}
