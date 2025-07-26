import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { getTableColumns, SQL, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { PgTable } from 'drizzle-orm/pg-core';

import { Inject, Injectable } from '@nestjs/common';

import { PG_CONNECTION } from '../constants';
import * as schema from '../drizzle/schema';
import { SensorDataV2Dto } from './dto/sensor-data.dto';

@Injectable()
export class SensorsServiceV2 {
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
  private readonly GAS_PIN = 12;
  private readonly IAQ_PIN = 13;


  constructor(
    @Inject(PG_CONNECTION) private readonly db: NodePgDatabase<typeof schema>,) {
    dayjs.extend(utc);
  }

  private buildConflictUpdateColumns = <
    T extends PgTable,
    Q extends keyof T['_']['columns']
  >(
    table: T,
    columns: Q[],
  ) => {
    const cls = getTableColumns(table);
    return columns.reduce((acc, column) => {
      const colName = cls[column].name;
      acc[column] = sql.raw(`excluded.${colName}`);
      return acc;
    }, {} as Record<Q, SQL>);
  };

  public async insertSensorData(data: SensorDataV2Dto) {
    const historyData: schema.HistoricalDataModel = {
      id: crypto.randomUUID(),
      sensorName: data.sensor,
      absolutePressure: data.pressure,
      battery: data.volt,
      humidity: data.humidity,
      relativePressure: data.rel_pressure,
      temperature: data.temperature,
      ts: dayjs.utc().format(),
      zambretti: data.zambretti,
    };

    await this.db.insert(schema.statusData).values(this.getMultiStatusData(data)).onConflictDoUpdate({
      target: [schema.statusData.sensorName, schema.statusData.pin],
      set: this.buildConflictUpdateColumns(schema.statusData, ['doublevalue', 'stringvalue', 'ts']),
    });
    await this.db.insert(schema.historicalData).values(historyData);

    return `Sensor data for ${data.sensor} persisted.`;
  }


  private getMultiStatusData(data: SensorDataV2Dto): schema.StatusDataModel[] {
    const statusData: schema.StatusDataModel[] = [];

    const ts = dayjs.utc().format();
    const local = dayjs().local().format()
    const sensor_name = data.sensor;

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.temperature,
      pin: this.TEMPERATURE_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.humidity,
      pin: this.HUMIDITY_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.pressure,
      pin: this.ABSOLUTE_PRESSURE_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.rel_pressure,
      pin: this.RELATIVE_PRESSURE_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.volt,
      pin: this.BATTERY_VOLTS_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.dew_point,
      pin: this.DEW_POINT_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.heat_index,
      pin: this.HEAT_INDEX_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      stringvalue: data.zambretti,
      pin: this.ZAMBRETTIS_WORD_PIN,
      doublevalue: null,
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      stringvalue: data.trend,
      pin: this.TREND_IN_WORDS_PIN,
      doublevalue: null,
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.accuracy,
      pin: this.ACCURACY_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      doublevalue: data.dew_point_spread,
      pin: this.DEW_POINT_SPREAD_PIN,
      stringvalue: '',
    });

    statusData.push({
      sensorName: sensor_name,
      ts: ts,
      stringvalue: `Sensor updated time ${local}`,
      doublevalue: data.time,
      pin: this.UPDATE_TIME_PIN,
    });


    if (data.gas) {
      statusData.push({
        sensorName: sensor_name,
        ts: ts,
        doublevalue: data.gas,
        pin: this.GAS_PIN,
        stringvalue: ''
      });
    }

    if (data.iaq) {
      statusData.push({
        sensorName: sensor_name,
        ts: ts,
        doublevalue: data.iaq,
        pin: this.IAQ_PIN,
        stringvalue: '',
      });
    }

    return statusData;
  }
}
