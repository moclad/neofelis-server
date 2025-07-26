import { InferSelectModel, sql } from 'drizzle-orm';
import {
    doublePrecision,
    index,
    integer,
    numeric,
    pgTable,
    pgView,
    primaryKey,
    smallint,
    text,
    timestamp,
    unique,
    uuid
} from 'drizzle-orm/pg-core';

export const statusData = pgTable("status_data", {
    sensorName: text("sensor_name").notNull(),
    pin: smallint().notNull(),
    ts: timestamp({ mode: 'string' }).notNull(),
    stringvalue: text(),
    doublevalue: doublePrecision(),
}, (table) => [
    primaryKey({ columns: [table.sensorName, table.pin], name: "status_data_pkey" }),
    unique("status_data_sensor_name_pin_key").on(table.sensorName, table.pin),
]);

export const gaugeData = pgTable("gauge_data", {
    id: uuid().defaultRandom().notNull(),
    sensorName: text("sensor_name").notNull(),
    ts: timestamp({ mode: 'string' }).notNull(),
    battery: doublePrecision(),
    tick: smallint(),
    amount: doublePrecision(),
    rain: integer().default(0).notNull(),
}, (table) => [
    index("gauge_data_idx3").using("btree", table.sensorName.asc().nullsLast().op("timestamp_ops"), table.ts.asc().nullsLast().op("text_ops")),
    index("gauge_data_ts_idx1").using("btree", table.ts.desc().nullsFirst().op("timestamp_ops")),
    primaryKey({ columns: [table.id, table.ts], name: "gauge_data_pkey" }),
    unique("gauge_data_id_ts_key").on(table.id, table.ts),
]);

export const historicalData = pgTable("historical_data", {
    sensorName: text("sensor_name").notNull(),
    ts: timestamp({ mode: 'string' }).notNull(),
    temperature: doublePrecision(),
    humidity: doublePrecision(),
    absolutePressure: doublePrecision("absolute_pressure"),
    relativePressure: doublePrecision("relative_pressure"),
    battery: doublePrecision(),
    zambretti: text(),
    id: uuid().defaultRandom().notNull(),
}, (table) => [
    index("historical_data_idx3").using("btree", table.sensorName.asc().nullsLast().op("text_ops"), table.ts.asc().nullsLast().op("text_ops")),
    index("historical_data_ts_idx1").using("btree", table.ts.desc().nullsFirst().op("timestamp_ops")),
    primaryKey({ columns: [table.ts, table.id], name: "historical_data_pkey" }),
    unique("historical_data_id_ts_key").on(table.ts, table.id),
]);
export const temperatureSummaryDaily = pgView("temperature_summary_daily", {
    bucket: timestamp({ mode: 'string' }),
    avgTemp: doublePrecision("avg_temp"),
    maxTemp: doublePrecision("max_temp"),
    minTemp: doublePrecision("min_temp"),
}).as(sql`SELECT _materialized_hypertable_7.bucket, _materialized_hypertable_7.avg_temp, _materialized_hypertable_7.max_temp, _materialized_hypertable_7.min_temp FROM _timescaledb_internal._materialized_hypertable_7 WHERE _materialized_hypertable_7.bucket < COALESCE(_timescaledb_internal.to_timestamp_without_timezone(_timescaledb_internal.cagg_watermark(7)), '-infinity'::timestamp without time zone) UNION ALL SELECT time_bucket('1 day'::interval, historical_data.ts) AS bucket, avg(historical_data.temperature) AS avg_temp, max(historical_data.temperature) AS max_temp, min(historical_data.temperature) AS min_temp FROM historical_data WHERE historical_data.ts >= COALESCE(_timescaledb_internal.to_timestamp_without_timezone(_timescaledb_internal.cagg_watermark(7)), '-infinity'::timestamp without time zone) GROUP BY (time_bucket('1 day'::interval, historical_data.ts))`);

export const maxMinRecordedTemperature = pgView("max_min_recorded_temperature", {
    maxTemperature: numeric("max_temperature"),
    maxYear: numeric("max_year"),
    minTemperature: numeric("min_temperature"),
    minYear: numeric("min_year"),
}).as(sql`SELECT max(data.max_temp)::numeric AS max_temperature, EXTRACT(year FROM last(data.bucket, data.max_temp)) AS max_year, min(data.min_temp)::numeric AS min_temperature, EXTRACT(year FROM first(data.bucket, data.min_temp)) AS min_year FROM ( SELECT temperature_summary_daily.min_temp, temperature_summary_daily.max_temp, temperature_summary_daily.bucket FROM temperature_summary_daily WHERE EXTRACT(day FROM temperature_summary_daily.bucket) = EXTRACT(day FROM now()) AND EXTRACT(month FROM temperature_summary_daily.bucket) = EXTRACT(month FROM now())) data`);


export type StatusDataModel = InferSelectModel<typeof statusData>;
export type HistoricalDataModel = InferSelectModel<typeof historicalData>;
