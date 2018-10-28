import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne, OneToOne, JoinColumn, JoinTable
} from "typeorm";
import {Customer} from "./Customer";
import {Driver} from "./Driver";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('enum', {
        enum: ['new', 'arrived', 'approved', 'process', 'completed'],
        default: 'new'
    })
    status: 'new' | 'arrived' | 'approved' | 'process' | 'completed';

    @Column('int', {
        nullable: true
    })
    price: number;

    @Column({
        nullable: true
    })
    completedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type => Customer, customer => customer.orders, {
        eager: true
    })
    @JoinTable()
    customer: Customer;

    @ManyToOne(type => Driver, driver => driver.orders, {
        cascade: true,
        eager: true
    })
    @JoinTable()
    driver: Driver;
}
