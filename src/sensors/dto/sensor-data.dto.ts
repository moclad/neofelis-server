import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SensorDataDto {
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
}

export class ExtendedSensorDataDto {
  @ApiProperty({ example: 'extern-sensor', description: 'Sensor name' })
  @IsNotEmpty()
  public sensor: string;

  @ApiProperty({
    example: '2023-11-19T19:55:01',
    description: 'Timestamp',
  })
  @IsNotEmpty()
  public ts: string;

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
    example: 'Fine, possibly showers',
    description: 'Zambretti words',
  })
  public zambretti: string;

  @ApiProperty({
    example: 19.3,
    description: 'Max today\'s temperature',
  })
  public max_today: number;

  @ApiProperty({
    example: 1.3,
    description: 'Min today\'s temperature',
  })
  public min_today: number;

  @ApiProperty({
    example: 1.3,
    description: 'Average today\'s temperature',
  })
  public avg_today: number;

  @ApiProperty({
    example: 1.3,
    description: 'Minimum recorded temperature',
  })
  public record_min: number;

  @ApiProperty({
    example: 28.3,
    description: 'Maximal recorded temperature',
  })
  public record_max: number;

  @ApiProperty({
    example: 2020,
    description: 'Year of minimal recorded temperature',
  })
  public record_min_year: number;

  @ApiProperty({
    example: 2019,
    description: 'Year of maximal recorded temperature',
  })
  public record_max_year: number;

}
