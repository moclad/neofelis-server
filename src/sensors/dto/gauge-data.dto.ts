import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class GaugeDataDto {
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
    example: 0.45,
    description: 'Gauge tick, amount representation of each tick movement',
  })
  @IsNumber()
  @IsNotEmpty()
  public tick: number;

  @ApiProperty({
    example: 2.8,
    description: 'Battery voltage (V)',
  })
  @IsNumber()
  public volt: number;
}
