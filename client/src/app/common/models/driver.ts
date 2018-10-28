import {Order} from "./order";

export interface Driver {
    id?: number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    carNumber?: string;
    orders?: Order[];
    activeOrder?: Order;
}
