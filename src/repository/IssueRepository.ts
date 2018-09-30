import {EntityRepository, Repository} from "typeorm";
import {Issue} from "../entity/Issue";

@EntityRepository(Issue)
export class IssueRepository extends Repository<Issue> {
}