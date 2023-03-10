import { join } from 'path';

import { HasuraModule } from '@golevelup/nestjs-hasura';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecurringModule } from './recurring/recurring.module';
import { SdkModule } from './sdk/sdk.module';
import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [
    SdkModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          connectionName: 'neofelis',
          name: 'neofelis',
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          username: configService.get<string>('REDIS_USER'),
          password: configService.get<string>('REDIS_PASS'),
        },
      }),
      inject: [ConfigService],
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
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    RecurringModule,
    SensorsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
