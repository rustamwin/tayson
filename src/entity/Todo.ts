import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({
        default: false
    })
    done: boolean;

    @Column({
        default: new Date()
    })
    doneAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    constructor(text: string, done: boolean, doneAt: Date) {
        this.text = text;
        this.done = done;
        this.doneAt = doneAt;
        //this.createdAt = createdAt;
    }
}
