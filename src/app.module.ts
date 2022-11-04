import { join } from 'path';

import { HasuraModule } from '@golevelup/nestjs-hasura';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { RecurringModule } from './recurring/recurring.module';
import { SdkModule } from './sdk/sdk.module';

@Module({
  imports: [
    SdkModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HasuraModule.forRootAsync(HasuraModule, {
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const webhookSecret = configService.get<string>(
          'NEOFELIS_EVENT_WEBHOOK_SHARED_SECRET',
        );

        const environment = configService.get<string | undefined>('NODE_ENV');

        return {
          enableEventLogs: false,
          webhookConfig: {
            secretFactory: webhookSecret,
            secretHeader: 'neofelis-event-webhook',
          },
          managedMetaDataConfig:
            environment === undefined || environment === 'development'
              ? {
                  metadataVersion: 'v3',
                  dirPath: join(process.cwd(), 'hasura/metadata'),
                  nestEndpointEnvName: 'NEOFELIS_EVENT_WEBHOOK_ENDPOINT',
                  secretHeaderEnvName: 'NEOFELIS_EVENT_WEBHOOK_SHARED_SECRET',
                  defaultEventRetryConfig: {
                    intervalInSeconds: 30,
                    numRetries: 3,
                    timeoutInSeconds: 100,
                    toleranceSeconds: 21600,
                  },
                }
              : undefined,
        };
      },
    }),
    RecurringModule,
  ],
})
export class AppModule {}
