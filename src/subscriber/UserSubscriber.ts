import {EventSubscriber, EntitySubscriberInterface, InsertEvent} from "typeorm";
import {Customer} from "../entity/Customer";
import * as crypto from 'crypto'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<Customer> {

    listenTo() {
        return Customer;
    }

    beforeInsert(event: InsertEvent<Customer>) {
        this.setPassword(event.entity)
    }


    protected setPassword(user: Customer) {
        //user.password = bcrypt.hashSync(user.password, 10);
        user.accessToken = crypto.randomBytes(32).toString('hex');
    }

}
