import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    JoinTable, BeforeInsert, AfterUpdate, OneToOne, ManyToOne, OneToMany,
} from "typeorm";
import {Order} from "./Order";
import * as bcrypt from "bcrypt";

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

    @OneToMany(type => Order, order => order.customer)
    @JoinTable()
    orders: Order[];

    @Column()
    access_token: string;

}
