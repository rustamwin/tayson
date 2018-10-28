import {Driver} from "./driver";
import {User} from "./user";

export class Order {
    id?: string;
    price?: number;
    driver?: Driver;
    customer?: User;
    status?: 'new'|'arrived'|'approved'|'process'|'completed';
    completedAt?: Date;
    createAt?: Date;
}
