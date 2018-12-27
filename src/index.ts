import * as express from "express";
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as cors from 'cors';
import * as io from 'socket.io';
import {useSocketServer} from "socket-controllers";
import * as path from "path";
import * as _ from "lodash";

const jayson = require('jayson/promise');
const methods = require('require-dir')('./method', {recurse: true});

createConnection().then(async connection => {
    const app = express();
    const server = require('http').Server(app);
    const rpc = await jayson.server({}, {
        router: (method: any, params) => {
            if (_.hasIn(methods, method)) {
                const func = _.get(methods, method);
                if (_.isFunction(func))
                    return new jayson.Method(_.get(methods, method));
            }
        },
    });
    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true,
    }));
    // app.use(json());
    app.use(rpc.middleware());
    app.use(express.static(path.resolve(__dirname, '../client/dist')));

    app.get('/*', async (req, res, next) => {
        await res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
    });

    useSocketServer(io(server), {
        controllers: [__dirname + "/controller/**/*Controller.ts"]
    });
    // Run application
    server.listen(3000, () => console.log(`Server is run on port 3000`));
}).catch(error => console.error(error));
