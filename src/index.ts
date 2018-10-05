import * as express from "express";
import "reflect-metadata";
import {json, urlencoded} from 'body-parser';
import {createConnection} from "typeorm";
import * as cors from 'cors';
import * as _ from 'lodash';

const jayson = require('jayson/promise');

const methods = require('require-dir')('./methods', {recurse: true});

createConnection().then(async connection => {
    const app = express();
    const server = await jayson.server({}, {
        router: (method, params) => {
            if (_.hasIn(methods, method) && _.isFunction(_.get(methods, method))) {
                return new jayson.Method(_.get(methods, method));
            }
        },
    });
    app.use(cors());
    app.use(json());

    app.use(server.middleware());

    // Run application
    app.listen(3000, () => console.log(`Server is run on port 3000`));
}).catch(error => console.error(error));
