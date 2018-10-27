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
import {OrderRepository} from "../repository/OrderRepository";

@SocketController("/order")
export class OrderController {

    @OnConnect()
    connect(@ConnectedSocket() socket: SocketIo.Server) {
        console.log("client connected");
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

    @OnMessage("approve")
    @EmitOnSuccess("approved")
    async approve(@SocketIO() io: any, @MessageBody() order: Order) {
        try {
            order = await getCustomRepository(OrderRepository).findOne(order);
            order.status = 'approved';
            const order_changes = await getCustomRepository(CustomerRepository).save(order);
            io.emit('status', order_changes);
            return order_changes;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}