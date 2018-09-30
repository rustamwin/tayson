import {EntityRepository, Repository} from "typeorm";
import {Project} from "../entity/Project";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
}