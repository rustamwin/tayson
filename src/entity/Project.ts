import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Issue} from "./Issue";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 100
    })
    name: string;

    @Column('varchar', {
        length: 300
    })
    info: string;

    @Column('enum', {
        enum: ['active', 'archived'],
        default: 'active'
    })
    status: string;

    @OneToMany(type => Issue, issue => issue.project)
    issues: Issue[];

    @CreateDateColumn()
    createdAt: Date;

    @Column({
        nullable: true
    })
    archivedAt: Date;
}
