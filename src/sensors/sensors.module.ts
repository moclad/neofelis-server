import { Module } from '@nestjs/common';

import { SdkModule } from '../sdk/sdk.module';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';

@Module({
  imports: [SdkModule],
  controllers: [SensorsController],
  providers: [SensorsService],
})
export class SensorsModule {}
