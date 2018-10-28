import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany, AfterLoad,
} from "typeorm";
import {Order} from "./Order";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(type => Order, order => order.customer, {
        cascade: true
    })
    orders: Order[];

    @Column()
    accessToken: string;

    order: Order;

}
