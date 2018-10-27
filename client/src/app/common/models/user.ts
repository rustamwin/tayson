import {Order} from "./order";

export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    order?: Order
}
