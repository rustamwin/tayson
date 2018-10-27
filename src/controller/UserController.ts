/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */

import {
    ConnectedSocket,
    EmitOnSuccess,
    MessageBody,
    OnConnect,
    OnDisconnect,
    OnMessage,
    SocketController, SocketIO, SocketQueryParam
} from "socket-controllers";
import {Order} from "../entity/Order";
import * as SocketIo from "socket.io";
import {getCustomRepository} from "typeorm";
import {CustomerRepository} from "../repository/CustomerRepository";
import {Customer} from "../entity/Customer";
import {OrderRepository} from "../repository/OrderRepository";
import {Driver} from "../entity/Driver";
import {DriverRepository} from "../repository/DriverRepository";

@SocketController("/user")
export class UserController {

    @OnConnect()
    connect(@ConnectedSocket() socket: SocketIo.Server) {
        console.log("user connected");
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: any) {
        console.log("user disconnected");
    }

    @OnMessage("user:create")
    // @EmitOnSuccess("user:created")
    async userCreate(@SocketIO() io: any, @ConnectedSocket() socket, @MessageBody() user: Customer) {
        try {
            console.log(user);
            const order = await getCustomRepository(OrderRepository).save(new Order);
            user.orders = [order];
            const customer = await getCustomRepository(CustomerRepository).save(user);
            socket.emit('user:created', customer);
            socket.emit('order:created', order);
            return customer;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    @OnMessage("driver:create")
    //@EmitOnSuccess("user:created")
    async driverCreate(@SocketIO() io: any, @ConnectedSocket() socket, @MessageBody() user: Driver) {
        try {
            const driver = await getCustomRepository(DriverRepository).save(user);
            socket.emit('driver:created', driver);
            return driver;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    @OnMessage("driver:order")
    //@EmitOnSuccess("user:created")
    async driverOrder(@SocketQueryParam('token') token: any, @ConnectedSocket() socket, @MessageBody() user: Driver) {
        try {
            const driver = await getCustomRepository(DriverRepository).find(user);
            const orders = await getCustomRepository(OrderRepository).find({status: 'new'});
            socket.emit('driver:orders', orders);
            return driver;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}