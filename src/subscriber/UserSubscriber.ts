import {EventSubscriber, EntitySubscriberInterface, InsertEvent} from "typeorm";
import {User} from "../entity/User";
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo() {
        return User;
    }

    beforeInsert(event: InsertEvent<User>) {
        this.setPassword(event.entity)
    }


    protected setPassword(user: User) {
        user.password = bcrypt.hashSync(user.password, 10);
        user.access_token = crypto.randomBytes(32).toString('hex');
    }

}
