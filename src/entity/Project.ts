import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Issue} from "./Issue";
import * as _ from "lodash";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 100
    })
    name: string;

    @Column('varchar', {
        length: 100
    })
    slug: string;

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
    @JoinTable()
    issues: Issue[];

    @CreateDateColumn()
    createdAt: Date;

    @Column({
        nullable: true
    })
    archivedAt: Date;

    @BeforeInsert()
    beforeInsert() {
        this.slug = _.kebabCase(this.name);
    }
}
