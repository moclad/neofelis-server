import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PG_CONNECTION } from '../constants';
import * as schema from './schema';

@Module({
    providers: [
        {
            provide: PG_CONNECTION,
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const connectionString = configService.get<string>('DATABASE_URL');
                const pool = new Pool({
                    connectionString,
                    // ssl: true,
                });

                return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
            },
        },
    ],
    exports: [PG_CONNECTION],
})
export class DrizzleModule { }