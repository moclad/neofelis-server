import { Module } from '@nestjs/common';

import { DrizzleModule } from '../drizzle/drizzle.modules';
import { SdkModule } from '../sdk/sdk.module';
import { SensorsControllerV2 } from './sensors.v2.controller';
import { SensorsServiceV2 } from './sensors.v2.service';

@Module({
  imports: [SdkModule, DrizzleModule],
  controllers: [SensorsControllerV2],
  providers: [SensorsServiceV2],
})
export class SensorsModuleV2 { }
