import {Driver} from "./driver";
import {User} from "./user";

export class Issue {
    id?: string;
    text?: string;
    project?: Driver;
    assigners?: User[];
    done?: boolean;
    doneAt?: Date;
    createAt?: Date;
}
