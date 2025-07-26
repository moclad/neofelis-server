import { GraphQLClient } from 'graphql-request';

import { GraphQLClientInject, GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';
import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { getSdk } from './sdk';

const SDK = 'SDK';

export type GqlSdk = ReturnType<typeof getSdk>;

export const InjectSdk = () => Inject(SDK);

@Module({
  imports: [
    ConfigModule,
    GraphQLRequestModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          const endpoint = configService.get<string>(
            'HASURA_GRAPHQL_API_ENDPOINT',
          );
          const secret = configService.get<string>('HASURA_GRAPHQL_ADMIN_SECRET');

          return {
            endpoint,
            options: {
              headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': secret,
              },
            },
          };
        },
      },
    ),
  ],
  providers: [
    {
      provide: SDK,
      inject: [GraphQLClientInject,],
      useFactory: (client: GraphQLClient) => getSdk(client),
    },
  ],
  exports: [SDK],
})
export class SdkModule { }
