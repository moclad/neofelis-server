FROM hasura/graphql-engine:latest

# # Copy migrations directory
COPY ./hasura/migrations /hasura-migrations

# # Copy metadata directory
COPY ./hasura/metadata /hasura-metadata

# Enable the console
ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

# https://github.com/hasura/graphql-engine/issues/4651#issuecomment-623414531
ENV HASURA_GRAPHQL_CLI_ENVIRONMENT=default

ENV HASURA_GRAPHQL_MIGRATIONS_DATABASE_ENV_VAR=DATABASE_URL

# Enable JWT
ENV HASURA_GRAPHQL_JWT_SECRET=HASURA_GRAPHQL_JWT_SECRET

# Secure the GraphQL endpoint
ENV HASURA_GRAPHQL_ADMIN_SECRET=HASURA_GRAPHQL_ADMIN_SECRET

ENV HASURA_GRAPHQL_ENABLED_LOG_TYPES="startup, http-log, webhook-log, websocket-log, query-log"
ENV HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous
ENV HASURA_GRAPHQL_ENABLE_REMOTE_SCHEMA_PERMISSIONS=true

ENV NEOFELIS_BASE_URL=NEOFELIS_BASE_URL
ENV NEOFELIS_EVENT_WEBHOOK_ENDPOINT=NEOFELIS_EVENT_WEBHOOK_ENDPOINT
ENV NEOFELIS_EVENT_WEBHOOK_SHARED_SECRET=NEOFELIS_EVENT_WEBHOOK_SHARED_SECRET


CMD graphql-engine \
  --database-url $DATABASE_URL \
  serve \
  --server-port 8080
