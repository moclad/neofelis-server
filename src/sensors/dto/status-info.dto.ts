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
    example: 'Sensor health status',
    description: 'Status message',
  })
  public status: string;

  @ApiProperty({
    example: 10.5,
    description: 'Any double number, status infomation ',
  })
  @IsNumber()
  public value: number;


}
