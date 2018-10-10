import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    JoinTable, BeforeInsert, AfterUpdate,
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

    @Column({
        nullable: true
    })
    password_hash: string;

    @BeforeInsert()
    beforeInsert() {
        this.password_hash = bcrypt.hashSync(this.password, 10);
        console.log('before');
    }

}
