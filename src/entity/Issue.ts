import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    JoinTable,
    UpdateDateColumn, ManyToOne
} from "typeorm";
import {User} from "./User";
import {Project} from "./Project";

@Entity()
export class Issue {
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

    @ManyToMany(type => User, user => user.issues)
    assigners: User[];

    @ManyToOne(type => Project, project => project.issues)
    project: Project;
}
