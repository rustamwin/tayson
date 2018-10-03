import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, BeforeInsert} from "typeorm";
import {Issue} from "./Issue";
import {IsEmail} from "class-validator";
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
    @IsEmail()
    email: string;

    @Column('varchar', {
        length: 200
    })
    job: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(type => Issue, issue => issue.assigners)
    issues: Issue[];

    @Column()
    password: string;

    @BeforeInsert()
    async beforeInsert() {
        //if (this.password) {
        this.password = await bcrypt.hash(this.password, 1);
        //}
    }
}
