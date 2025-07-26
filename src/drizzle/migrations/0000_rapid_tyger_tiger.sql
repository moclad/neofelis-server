-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "status_data" (
	"sensor_name" text NOT NULL,
	"pin" smallint NOT NULL,
	"ts" timestamp NOT NULL,
	"stringvalue" text,
	"doublevalue" double precision,
	CONSTRAINT "status_data_pkey" PRIMARY KEY("sensor_name","pin"),
	CONSTRAINT "status_data_sensor_name_pin_key" UNIQUE("sensor_name","pin")
);
--> statement-breakpoint
CREATE TABLE "gauge_data" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"sensor_name" text NOT NULL,
	"ts" timestamp NOT NULL,
	"battery" double precision,
	"tick" smallint,
	"amount" double precision,
	"rain" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "gauge_data_pkey" PRIMARY KEY("id","ts"),
	CONSTRAINT "gauge_data_id_ts_key" UNIQUE("id","ts")
);
--> statement-breakpoint
CREATE TABLE "historical_data" (
	"sensor_name" text NOT NULL,
	"ts" timestamp NOT NULL,
	"temperature" double precision,
	"humidity" double precision,
	"absolute_pressure" double precision,
	"relative_pressure" double precision,
	"battery" double precision,
	"zambretti" text,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	CONSTRAINT "historical_data_pkey" PRIMARY KEY("ts","id"),
	CONSTRAINT "historical_data_id_ts_key" UNIQUE("ts","id")
);
--> statement-breakpoint
CREATE INDEX "gauge_data_idx3" ON "gauge_data" USING btree ("sensor_name" timestamp_ops,"ts" text_ops);--> statement-breakpoint
CREATE INDEX "gauge_data_ts_idx1" ON "gauge_data" USING btree ("ts" timestamp_ops);--> statement-breakpoint
CREATE INDEX "historical_data_idx3" ON "historical_data" USING btree ("sensor_name" text_ops,"ts" text_ops);--> statement-breakpoint
CREATE INDEX "historical_data_ts_idx1" ON "historical_data" USING btree ("ts" timestamp_ops);--> statement-breakpoint
CREATE VIEW "public"."temperature_summary_daily" AS (SELECT _materialized_hypertable_7.bucket, _materialized_hypertable_7.avg_temp, _materialized_hypertable_7.max_temp, _materialized_hypertable_7.min_temp FROM _timescaledb_internal._materialized_hypertable_7 WHERE _materialized_hypertable_7.bucket < COALESCE(_timescaledb_internal.to_timestamp_without_timezone(_timescaledb_internal.cagg_watermark(7)), '-infinity'::timestamp without time zone) UNION ALL SELECT time_bucket('1 day'::interval, historical_data.ts) AS bucket, avg(historical_data.temperature) AS avg_temp, max(historical_data.temperature) AS max_temp, min(historical_data.temperature) AS min_temp FROM historical_data WHERE historical_data.ts >= COALESCE(_timescaledb_internal.to_timestamp_without_timezone(_timescaledb_internal.cagg_watermark(7)), '-infinity'::timestamp without time zone) GROUP BY (time_bucket('1 day'::interval, historical_data.ts)));--> statement-breakpoint
CREATE VIEW "public"."max_min_recorded_temperature" AS (SELECT max(data.max_temp)::numeric AS max_temperature, EXTRACT(year FROM last(data.bucket, data.max_temp)) AS max_year, min(data.min_temp)::numeric AS min_temperature, EXTRACT(year FROM first(data.bucket, data.min_temp)) AS min_year FROM ( SELECT temperature_summary_daily.min_temp, temperature_summary_daily.max_temp, temperature_summary_daily.bucket FROM temperature_summary_daily WHERE EXTRACT(day FROM temperature_summary_daily.bucket) = EXTRACT(day FROM now()) AND EXTRACT(month FROM temperature_summary_daily.bucket) = EXTRACT(month FROM now())) data);
*/