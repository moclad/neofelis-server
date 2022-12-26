import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { gql } from 'graphql-request';

import { Injectable } from '@nestjs/common';

import { Status_Data_Insert_Input } from '../sdk/sdk';
import { GqlSdk, InjectSdk } from '../sdk/sdk.module';
import { CreateSensorDto } from './dto/create-sensor.dto';

gql`
  mutation insertStatusData(
    $statusData: [status_data_insert_input!]!
    $historyData: [historical_data_insert_input!]!
  ) {
    insert_status_data(
      objects: $statusData
      on_conflict: {
        constraint: status_data_pkey
        update_columns: [doublevalue, ts, stringvalue]
      }
    ) {
      affected_rows
    }
    insert_historical_data(objects: $historyData) {
      affected_rows
    }
  }
`;

@Injectable()
export class SensorsService {
  private readonly TEMPERATURE_PIN = 0;
  private readonly HUMIDITY_PIN = 1;
  private readonly ABSOLUTE_PRESSURE_PIN = 2;
  private readonly RELATIVE_PRESSURE_PIN = 3;
  private readonly BATTERY_VOLTS_PIN = 4;
  private readonly DEW_POINT_PIN = 5;
  private readonly HEAT_INDEX_PIN = 6;
  private readonly ZAMBRETTIS_WORD_PIN = 7;
  private readonly ACCURACY_PIN = 8;
  private readonly TEND_IN_WORDS_PIN = 9;
  private readonly DEW_POINT_SPREAD_PIN = 10;
  private readonly UPDATE_TIME_PIN = 11;

  constructor(@InjectSdk() private readonly sdk: GqlSdk) {
    dayjs.extend(utc);
  }

  public create(data: CreateSensorDto) {
    const statusData = this.getStatusData(data);

    this.sdk.insertStatusData({
      statusData,
      historyData: statusData,
    });

    return 'This action adds a new sensor';
  }

  private getStatusData(data: CreateSensorDto): Status_Data_Insert_Input[] {
    const statusData: Status_Data_Insert_Input[] = [];

    const ts = dayjs.unix(data.time).utc().format();
    const sensor_name = data.sensor;

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.temperature,
      pin: this.TEMPERATURE_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.humidity,
      pin: this.HUMIDITY_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.pressure,
      pin: this.ABSOLUTE_PRESSURE_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.rel_pressure,
      pin: this.RELATIVE_PRESSURE_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.volt,
      pin: this.BATTERY_VOLTS_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.dew_point,
      pin: this.DEW_POINT_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.heat_index,
      pin: this.HEAT_INDEX_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      stringvalue: data.zambretti,
      pin: this.ZAMBRETTIS_WORD_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      stringvalue: data.trend,
      pin: this.TEND_IN_WORDS_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.accuracy,
      pin: this.ACCURACY_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      doublevalue: data.dew_point_spread,
      pin: this.DEW_POINT_SPREAD_PIN,
    });

    statusData.push({
      sensor_name,
      ts,
      stringvalue: 'Sensor updated time',
      pin: this.UPDATE_TIME_PIN,
    });

    return statusData;
  }
}
