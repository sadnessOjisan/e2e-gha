FROM node:18 AS builder

ENV ORIGIN=http://localhost:8080

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "yarn", "test" ]