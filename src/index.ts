import * as express from "express";
import "reflect-metadata";
import {json} from 'body-parser';
import {createConnection} from "typeorm";
import * as cors from 'cors';
import * as io from 'socket.io';
import {useSocketServer} from "socket-controllers";
import * as path from "path";

createConnection().then(async connection => {
    const app = express();
    const server = require('http').Server(app);
    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true,
    }));
    // app.use(json());
    app.use(express.static(path.resolve(__dirname, '../client/dist')));

    app.get('/*', async (req, res, next) => {
        await res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
    });

    useSocketServer(io(server), {
        controllers: [__dirname + "/controller/**/*Controller.ts"]
    });
    // Run application
    server.listen(3000, () => console.log(`Server is run on port 3000`));
}).catch(error => console.error(error));
