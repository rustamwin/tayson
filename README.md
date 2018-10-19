Express, TypeORM, Jayson based Issue tracker application
==========================================================

Installation
------------

**For advanced developers**

put your own database connection configuration options in `ormconfig.json`

```sh
// install npm packages
$ npm i
// install npm packages for client
$ cd client && npm i
// start server
$ npm start
// start client
$ npm start
```

Directory structure
-------------------

```
client/             contains client application
    e2e/            end to end
    src/            contains application sources
src/                contains server application
    entity/         contains TypeORM entities
    methods/        contains JSON-RPC methods
    repository      contains TypeORM repositories
```
