import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { GaugeDataDto } from './dto/gauge-data.dto';
import { SensorDataDto } from './dto/sensor-data.dto';
import { SensorsService } from './sensors.service';
import { SensorStatusDto } from './dto/status-info.dto';

@Controller('sensors')
@ApiTags('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) { }

  @Post()
  @ApiOperation({ summary: 'Insert sensor data' })
  createSensorData(@Body() sensorDto: SensorDataDto) {
    return this.sensorsService.insertSensorData(sensorDto);
  }

  @Post('gauge')
  @ApiOperation({ summary: 'Insert sensor data' })
  createGaugeData(@Body() createSensorDto: GaugeDataDto) {
    return this.sensorsService.insertGaugeData(createSensorDto);
  }

  @Post('status')
  @ApiOperation({ summary: 'Insert sensor status information' })
  createStatusInfo(@Body() statusDto: SensorStatusDto) {
    return this.sensorsService.insertStatusInfo(statusDto);
  }
}
