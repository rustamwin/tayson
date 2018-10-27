import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./Order";
import * as crypto from "crypto";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 100
    })
    firstName: string;

    @Column('varchar', {
        length: 100
    })
    lastName: string;

    @Column('varchar', {
        length: 100
    })
    phone: string;

    @Column('varchar', {
        length: 100
    })
    carNumber: string;

    @Column('varchar', {
        length: 100
    })
    accessToken: string;

    @OneToMany(type => Order, order => order.driver)
    //@JoinTable()
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @BeforeInsert()
    insert() {
        this.accessToken = crypto.randomBytes(32).toString('hex')
    }
}
