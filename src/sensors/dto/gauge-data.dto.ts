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
    example: 1,
    description: 'Gauge tick',
  })
  @IsNumber()
  @IsNotEmpty()
  public tick: number;

  @ApiProperty({
    example: 0.45,
    description: 'Amount',
  })
  @IsNumber()
  @IsNotEmpty()
  public tick: number;

  @ApiProperty({
    example: 1,
    description: 'Battery state (1-OK, 0-LOW)',
  })
  @IsNumber()
  public battery: number;
}
