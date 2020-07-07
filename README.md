## Description

Backend authentication service for NestJS learning.

This service is used by the [http service](https://github.com/mrossioliveira/flutter-tasks) to authentication and token validation.

> :warning: Please make sure you spin up the http service before this one so they will share the same network.

## Running with Docker Compose

```bash
$ docker-compose up -d --build
```

You can check how to setup Docker Compose [here](https://docs.docker.com/compose/install/) in case you haven't done it yet.

## Running the app locally (needs Postgres running on localhost:5432)

Run a PostgreSQL instance on Docker:

```bash
$ docker run --name taskspostgres -p 5432:5432 -e POSTGRES_DB=task_dev -e POSTGRES_USER=task_dev -e POSTGRES_PASSWORD=password -d postgres
```

```bash
# install
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
