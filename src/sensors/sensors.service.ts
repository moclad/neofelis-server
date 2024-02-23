import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { gql } from 'graphql-request';

import { Injectable } from '@nestjs/common';

import {
  Gauge_Data_Insert_Input,
  Historical_Data_Insert_Input,
  Status_Data_Insert_Input
} from '../sdk/sdk';
import { GqlSdk, InjectSdk } from '../sdk/sdk.module';
import { GaugeDataDto } from './dto/gauge-data.dto';
import { ExtendedSensorDataDto, SensorDataDto } from './dto/sensor-data.dto';
import { SensorStatusDto } from './dto/status-info.dto';

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

gql`
  mutation insertGaugeData(
    $gaugeData: gauge_data_insert_input!
  ) {
    insert_gauge_data_one(
      object: $gaugeData
    ) {
      id
    }
  }
`;

gql`
  mutation insertStatusInfoData(
    $statusData: status_data_insert_input!
  ) {
    insert_status_data_one(
      object: $statusData
      on_conflict: {
        constraint: status_data_pkey
        update_columns: [doublevalue, ts, stringvalue]
      }
    ) {
      ts
      sensor_name
    }
  }
`;

gql`
query getStatusBySensor($sensorName: String!) {
  status_data(where: {sensor_name: {_eq: $sensorName}}) {
    doublevalue
    sensor_name
    stringvalue
    pin
    ts
  }
  temperature_summary_daily(where: {bucket: {_gte: "today()"}}) {
    avg_temp
    max_temp
    min_temp
  }
  max_min_recorded_temperature {
    max_temperature
    max_year
    min_temperature
    min_year
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
  private readonly TREND_IN_WORDS_PIN = 9;
  private readonly DEW_POINT_SPREAD_PIN = 10;
  private readonly UPDATE_TIME_PIN = 11;

  private lastGaugeDate: Date;

  constructor(@InjectSdk() private readonly sdk: GqlSdk) {
    dayjs.extend(utc);
  }

  public async insertGaugeData(data: GaugeDataDto) {
    if (dayjs(this.lastGaugeDate).day() === dayjs().day() && data.tick === 0) {
      return "Data will not be inserted.";
    }

    const gaugeData: Gauge_Data_Insert_Input = {
      battery: data.battery,
      sensor_name: data.sensor,
      tick: data.tick,
      amount: data.amount,
      rain: data.rain,
      ts: dayjs.utc().format(),
    };

    this.lastGaugeDate = dayjs().toDate();;

    const result = await this.sdk.insertGaugeData({
      gaugeData,
    });


    return result.insert_gauge_data_one.id;
  }

  public async insertStatusInfo(data: SensorStatusDto) {
    const statusData = this.getStatusData(data);


    await this.sdk.insertStatusInfoData({
      statusData,
    });

    return `Sensor data for ${data.sensor} persisted.`;

  }

  public async getSensorStatusInfo(sensorName: string): Promise<ExtendedSensorDataDto> {
    const result = await this.sdk.getStatusBySensor({
      sensorName: sensorName,
    });

    const sensorData: ExtendedSensorDataDto = {
      humidity: 0,
      rel_pressure: 0,
      sensor: "",
      temperature: 0,
      ts: '',
      volt: 0,
      zambretti: '',
      max_today: 0,
      min_today: 0,
      avg_today: 0,
      record_max: 0,
      record_max_year: 0,
      record_min: 0,
      record_min_year: 0
    };

    if (!result.status_data) {
      return sensorData;
    }

    sensorData.humidity = result.status_data.find(x => x.pin === this.HUMIDITY_PIN).doublevalue;
    sensorData.rel_pressure = result.status_data.find(x => x.pin === this.RELATIVE_PRESSURE_PIN).doublevalue;
    sensorData.sensor = result.status_data.find(x => x.pin === this.TEMPERATURE_PIN).sensor_name;
    sensorData.temperature = result.status_data.find(x => x.pin === this.TEMPERATURE_PIN).doublevalue;
    sensorData.volt = result.status_data.find(x => x.pin === this.BATTERY_VOLTS_PIN).doublevalue;
    sensorData.zambretti = result.status_data.find(x => x.pin === this.ZAMBRETTIS_WORD_PIN).stringvalue;
    sensorData.avg_today = result.temperature_summary_daily[0].avg_temp;
    sensorData.max_today = result.temperature_summary_daily[0].max_temp;
    sensorData.min_today = result.temperature_summary_daily[0].min_temp;
    sensorData.record_max = result.max_min_recorded_temperature[0].max_temperature;
    sensorData.record_max_year = result.max_min_recorded_temperature[0].max_year;
    sensorData.record_min = result.max_min_recorded_temperature[0].min_temperature;
    sensorData.record_min_year = result.max_min_recorded_temperature[0].min_year;

    return sensorData;
  }


  public async insertSensorData(data: SensorDataDto) {
    const statusData = this.getMultiStatusData(data);
    const historyData: Historical_Data_Insert_Input = {
      sensor_name: data.sensor,
      absolute_pressure: data.pressure,
      battery: data.volt,
      humidity: data.humidity,
      relative_pressure: data.rel_pressure,
      temperature: data.temperature,
      ts: dayjs.utc().format(),
      zambretti: data.zambretti,
    };

    const result = await this.sdk.insertStatusData({
      statusData,
      historyData,
    });

    return `Sensor data for ${data.sensor} persisted (${result.insert_historical_data.affected_rows} data rows inserted).`;
  }

  private getStatusData(data: SensorStatusDto): Status_Data_Insert_Input {
    const ts = dayjs.utc().format();
    const local = dayjs().local().format()

    const status = `${data.status} (updated at ${local})`;


    const statusData: Status_Data_Insert_Input = {
      pin: 0,
      ts,
      sensor_name: data.sensor,
      doublevalue: data.value,
      stringvalue: status
    };

    return statusData;
  }

  private getMultiStatusData(data: SensorDataDto): Status_Data_Insert_Input[] {
    const statusData: Status_Data_Insert_Input[] = [];

    const ts = dayjs.utc().format();
    const local = dayjs().local().format()
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
      pin: this.TREND_IN_WORDS_PIN,
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
      stringvalue: `Sensor updated time ${local}`,
      doublevalue: data.time,
      pin: this.UPDATE_TIME_PIN,
    });

    return statusData;
  }
}
