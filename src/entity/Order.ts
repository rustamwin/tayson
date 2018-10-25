import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne, OneToOne
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
    status: string;

    @Column('varchar', {
        length: 32,
        nullable: true
    })
    price: boolean;

    @Column({
        default: new Date()
    })
    completedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(type => Customer, user => user.orders)
    customer: Customer[];

    @ManyToOne(type => Driver, driver => driver.orders)
    driver: Driver;
}
