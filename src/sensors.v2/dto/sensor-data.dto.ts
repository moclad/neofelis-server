import { IsNotEmpty, IsNumber } from 'class-validator';

import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class SensorDataV2Dto {
  @ApiProperty({ example: 'extern-sensor', description: 'Sensor name' })
  @IsNotEmpty()
  public sensor: string;

  @ApiProperty({
    example: 1671986840,
    description: 'Data read timestamp (UNIX Timestamp)',
  })
  @IsNumber()
  @IsNotEmpty()
  public time: number;

  @ApiProperty({
    example: 30.9,
    description: 'Temperature (°C)',
  })
  @IsNumber()
  @IsNotEmpty()
  public temperature: number;

  @ApiProperty({
    example: 59.9,
    description: 'Humidity (%)',
  })
  @IsNumber()
  public humidity: number;

  @ApiProperty({
    example: 1013,
    description: 'Pressure (hPa)',
  })
  @IsNumber()
  public pressure: number;

  @ApiProperty({
    example: 1013,
    description: 'Rel. Pressure (hPa)',
  })
  @IsNumber()
  public rel_pressure: number;

  @ApiProperty({
    example: 2.8,
    description: 'Battery voltage (V)',
  })
  @IsNumber()
  public volt: number;

  @ApiProperty({
    example: 30.9,
    description: 'Dew Point (°C)',
  })
  @IsNumber()
  public dew_point: number;

  @ApiProperty({
    example: 30.9,
    description: 'Heat index (°C)',
  })
  @IsNumber()
  public heat_index: number;

  @ApiProperty({
    example: 'Fine, possibly showers',
    description: 'Zambretti words',
  })
  public zambretti: string;

  @ApiProperty({
    example: 10,
    description: 'Accuracy (%)',
  })
  @IsNumber()
  public accuracy: number;

  @ApiProperty({
    example: 'Falling fast',
    description: 'Trend words',
  })
  public trend: string;

  @ApiProperty({
    example: 20,
    description: 'Dew point spread (°C)',
  })
  @IsNumber()
  public dew_point_spread: number;

  @ApiProperty({
    example: 40.5,
    description: 'Recorded gas KOhms',
  })
  @Optional()
  @IsNumber()
  public gas: number;

  @ApiProperty({
    example: 450.0,
    description: 'Recorded Indoor Air Quality (IAQ)',
  })
  @Optional()
  @IsNumber()
  public iaq: number;
}


