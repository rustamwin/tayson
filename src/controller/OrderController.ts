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
    SocketController, SocketIO
} from "socket-controllers";
import {Order} from "../entity/Order";
import * as SocketIo from "socket.io";
import {getCustomRepository} from "typeorm";
import {CustomerRepository} from "../repository/CustomerRepository";
import {Customer} from "../entity/Customer";

@SocketController()
export class OrderController {

    @OnConnect()
    connect(@ConnectedSocket() socket: SocketIo.Server) {
        console.log("client connected");
        console.log(socket.nsps);
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: any) {
        console.log("client disconnected");
    }

    @OnMessage("inited")
    save(@ConnectedSocket() socket: any, @MessageBody() message: Order) {
        console.log("received message:", message);
        console.log("setting id to the message and sending it back to the client");
        console.log(socket.nsps);
        message.id = 1;
        socket.emit("handled", message, 1);
    }

    @OnMessage("order")
    @EmitOnSuccess("order:saved")
    async order(@SocketIO() socket: any, @MessageBody() user: Customer) {
        const customer = new Customer();
        customer.firstName = user.firstName;
        customer.lastName = user.lastName;
        customer.phone = user.phone;
        let order = new Order();
        customer.orders = [order];
        try {
            const message = await getCustomRepository(CustomerRepository).save(customer);
            socket.emit('order:created', message);
            return message;
        } catch (e) {
            return e;
        }
    }
}