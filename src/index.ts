import * as express from "express";
import "reflect-metadata";
import {json, urlencoded} from 'body-parser';
import {createConnection} from "typeorm";
import * as cors from 'cors';
import {Method} from 'jayson';

const _ = require('lodash');
const jayson = require('jayson/promise');

const methods = require('require-dir')('./methods', {recurse: true});

createConnection().then(async connection => {
    const app = express();
    const server = await jayson.server({}, {
        router: (method, params): Method => {
            if (_.hasIn(methods, method) && _.isFunction(_.get(methods, method))) {
                return new jayson.Method(_.get(methods, method));
            }
        },
    });
    app.use(cors({
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }));
    app.use(json());

    app.use(server.middleware());

    // Run application
    app.listen(3001, () => console.log(`Server is run on port 3001`));
}).catch(error => console.error(error));
