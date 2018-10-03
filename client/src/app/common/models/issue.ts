import {Project} from "./project";

export interface Issue {
    id?: string;
    text?: string;
    project?: Project;
    done?: boolean;
    doneAt?: Date;
    createAt?: Date;
}
