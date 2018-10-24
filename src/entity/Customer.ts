import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    JoinTable, BeforeInsert, AfterUpdate, OneToOne,
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

    @OneToOne(type => Order, order => order.user)
    @JoinTable()
    orders: Order[];

    @Column()
    password: string;

    @Column()
    access_token: string;

}
