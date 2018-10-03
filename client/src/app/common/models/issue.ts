export interface Issue {
    id?: string;
    text?: string;
    project?: string;
    done?: boolean;
    doneAt?: Date;
    createAt?: Date;
}
