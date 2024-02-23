import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SensorStatusDto {
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
    example: 0,
    description: 'PIN number',
  })
  @IsNumber()
  public pin: number;

  @ApiProperty({
    example: 'Sensor health status',
    description: 'Status message',
  })
  public status: string;

  @ApiProperty({
    example: 10.5,
    description: 'Any double number, status information',
  })
  @IsNumber()
  public value: number;
}

export class SensorNameDto {
  @ApiProperty({ example: 'extern-sensor', description: 'Sensor name' })
  public sensor: string;
}
