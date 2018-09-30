import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Issue} from "./Issue";

@Entity()
export class Assigner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    job: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(type => Issue, issue => issue.assigners)
    @JoinTable()
    issues: Issue[];
}
