import { join } from 'path';

import { HasuraModule } from '@golevelup/nestjs-hasura';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.modules';
import { SdkModule } from './sdk/sdk.module';
import { SensorsModuleV2 } from './sensors.v2/sensors.v2.module';
import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [
    DrizzleModule,
    SdkModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HasuraModule.forRootAsync({
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
    SensorsModule,
    SensorsModuleV2
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
  ],
})
export class AppModule { }
