import {Project} from "./project";
import {User} from "./user";

export interface Issue {
    id?: string;
    text?: string;
    project?: Project;
    assigners?: User[]
    done?: boolean;
    doneAt?: Date;
    createAt?: Date;
}
