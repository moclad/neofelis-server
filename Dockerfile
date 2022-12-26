###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:19-alpine As development

RUN apk --no-cache add curl

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod

COPY --chown=node:node . .
RUN pnpm install

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:19-alpine As build

RUN apk --no-cache add curl

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN pnpm build

ENV NODE_ENV production

RUN pnpm install --prod

USER node

###################
# PRODUCTION
###################

FROM node:19-alpine As production

ENV NODE_ENV production

ENV REDIS_HOST=REDIS_HOST
ENV REDIS_PORT=REDIS_PORT
ENV REDIS_PASS=REDIS_PASS
ENV REDIS_USER=REDIS_USER

ENV NEOFELIS_EVENT_WEBHOOK_SHARED_SECRET=NEOFELIS_EVENT_WEBHOOK_SHARED_SECRET

ENV HASURA_GRAPHQL_ADMIN_SECRET=HASURA_GRAPHQL_ADMIN_SECRET
ENV HASURA_GRAPHQL_API_ENDPOINT=HASURA_GRAPHQL_API_ENDPOINT


COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
