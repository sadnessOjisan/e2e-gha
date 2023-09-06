FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN yarn install

FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app

COPY --from=builder app/packages/server/src /app/src
COPY --from=builder app/node_modules/ /app/node_modules/
COPY --from=builder app/packages/server/package.json /app/package.json

EXPOSE 3000
CMD [ "src/index.js" ]