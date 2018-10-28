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
import {User} from "../../client/src/app/common/models/user";

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
    @EmitOnSuccess("user:created")
    async userCreate(@SocketIO() io: any, @ConnectedSocket() socket, @MessageBody() user: Customer) {
        try {
            console.log(user);
            const order = await getCustomRepository(OrderRepository).save(new Order);
            user.orders = [order];
            const customer = await getCustomRepository(CustomerRepository).save(user);
            socket.broadcast.emit('order:created', await getCustomRepository(OrderRepository).findOne(order.id));
            return customer;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    @OnMessage('order:new')
    async orderNew(@ConnectedSocket() socket: any, @MessageBody() user: User) {
        const order = new Order();
        order.customer = await getCustomRepository(CustomerRepository).findOne(user.id);
        const result = getCustomRepository(OrderRepository).save(order);
        socket.broadcast.emit('order:created', result)
    }

    @OnMessage("user:order")
    //@EmitOnSuccess("user:created")
    async userOrder(@SocketIO() io: any, @ConnectedSocket() socket, @MessageBody() user: Customer) {
        try {
            const customer = await getCustomRepository(CustomerRepository).findOne(user.id, {
                relations: ['orders']
            });
            socket.emit('user:order', customer.orders.find(order => order.status != 'completed'));
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
    @EmitOnSuccess("driver:order")
    async driverOrder(@ConnectedSocket() socket, @MessageBody() user: Driver) {
        try {
            const driver = await getCustomRepository(DriverRepository).findOne(user.id, {
                relations: ['orders']
            });
            const orders = await getCustomRepository(OrderRepository).find({where: {status: 'new'}});
            socket.emit('driver:orders', orders);
            return driver.orders.find(order => order.status != 'completed');
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    @OnMessage("order:status")
    @EmitOnSuccess("driver:order")
    async orderStatus(@ConnectedSocket() socket, @MessageBody() order: any) {
        try {
            order.status = getCustomRepository(OrderRepository).getNextStatus(order);
            const newOrder = await getCustomRepository(OrderRepository).save(order);
            console.log(newOrder);
            // const orders = await getCustomRepository(OrderRepository).find({relations: ['customer']});
            socket.broadcast.emit('order:status', newOrder);
            return newOrder;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}