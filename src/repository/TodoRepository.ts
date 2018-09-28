import {EntityRepository, Repository} from "typeorm";
import {Todo} from "../entity/Todo";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
}