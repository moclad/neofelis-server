import { Resolver } from '@nestjs/graphql';
import { RecurringService } from './recurring.service';

@Resolver()
export class RecurringResolver {
  constructor(private readonly recurringService: RecurringService) {}
}
