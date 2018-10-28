import {EntityRepository, Repository} from "typeorm";
import {Order} from "../entity/Order";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {

    getNextStatus(order: Order) {
        if (order.status == 'new') {
            return 'approved'
        } else if (order.status == 'approved') {
            return 'arrived'
        } else if (order.status == 'arrived') {
            return 'process'
        } else if (order.status == 'process') {
            return "completed"
        }
        return order.status;
    }
}