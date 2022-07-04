FROM hasura/graphql-engine:v2.9.0-beta.1

# # Copy migrations directory
COPY ./migrations /hasura-migrations

# # Copy metadata directory
COPY ./metadata /hasura-metadata

# Enable the console
ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

# Heroku hobby tier PG has few limitations including 20 max connections
# https://devcenter.heroku.com/articles/heroku-postgres-plans#hobby-tier
ENV HASURA_GRAPHQL_PG_CONNECTIONS=15

# https://github.com/hasura/graphql-engine/issues/4651#issuecomment-623414531
ENV HASURA_GRAPHQL_CLI_ENVIRONMENT=default

# https://github.com/hasura/graphql-engine/issues/5172#issuecomment-653774367
ENV HASURA_GRAPHQL_MIGRATIONS_DATABASE_ENV_VAR=DATABASE_URL

# Enable JWT
ENV HASURA_GRAPHQL_JWT_SECRET=HASURA_GRAPHQL_JWT_SECRET

# Secure the GraphQL endpoint
ENV HASURA_GRAPHQL_ADMIN_SECRET=HASURA_GRAPHQL_ADMIN_SECRET

ENV HASURA_GRAPHQL_ENABLED_LOG_TYPES="startup, http-log, webhook-log, websocket-log, query-log"
#ENV HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous
#ENV HASURA_GRAPHQL_ENABLE_REMOTE_SCHEMA_PERMISSIONS=true
# ENV NESTJS_BASE_URL=NESTJS_BASE_URL
# ENV NESTJS_EVENT_WEBHOOK_ENDPOINT=NESTJS_EVENT_WEBHOOK_ENDPOINT
# ENV NESTJS_EVENT_WEBHOOK_SHARED_SECRET=NESTJS_EVENT_WEBHOOK_SHARED_SECRET


CMD graphql-engine \
  --database-url $DATABASE_URL \
  serve \
  --server-port $PORT
