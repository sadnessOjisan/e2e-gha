# e2e-gha

run on native.

```sh
yarn start & ORIGIN=http://0.0.0.0:3000 yarn test
```

run on docker

```sh
docker compose up server & ORIGIN=http://0.0.0.0:8080 yarn test
```
