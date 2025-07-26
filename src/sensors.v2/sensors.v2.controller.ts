import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { SensorDataV2Dto } from './dto/sensor-data.dto';
import { SensorsServiceV2 } from './sensors.v2.service';

@Controller({ version: '2', path: 'sensors' })
@ApiTags('sensors')
export class SensorsControllerV2 {
  constructor(private readonly sensorsService: SensorsServiceV2) { }

  @Post()
  @ApiOperation({ summary: 'Insert sensor data' })
  createSensorData(@Body() sensorDto: SensorDataV2Dto) {
    return this.sensorsService.insertSensorData(sensorDto);
  }
}
