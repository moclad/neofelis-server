import { Test, TestingModule } from '@nestjs/testing';
import { RecurringResolver } from './recurring.resolver';
import { RecurringService } from './recurring.service';

describe('RecurringResolver', () => {
  let resolver: RecurringResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurringResolver, RecurringService],
    }).compile();

    resolver = module.get<RecurringResolver>(RecurringResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
