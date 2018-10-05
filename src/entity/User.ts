import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    JoinTable,
} from "typeorm";
import {Issue} from "./Issue";
import * as bcrypt from "bcrypt";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column('varchar', {
        length: 200
    })
    job: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(type => Issue, issue => issue.assigners)
    @JoinTable()
    issues: Issue[];

    @Column()
    password: string;

    @Column('varchar', {
        length: 200,
        nullable: true
    })
    pass: string;

}
