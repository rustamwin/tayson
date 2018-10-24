import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    JoinTable,
    UpdateDateColumn, ManyToOne, OneToOne
} from "typeorm";
import {Customer} from "./Customer";
import {Driver} from "./Driver";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 300
    })
    text: string;

    @Column('boolean', {
        default: false
    })
    done: boolean;

    @Column({
        default: new Date()
    })
    doneAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(type => Customer, user => user.issues)
    customer: Customer[];

    @ManyToOne(type => Driver, project => project.issues)
    project: Driver;
}
