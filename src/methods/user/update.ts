/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {ProjectRepository} from "../../repository/ProjectRepository";
import {Project} from "../../entity/Project";

module.exports = async (params: Project) => {
    try {
        const project = new Project();
        project.name = params.name;
        project.info = params.info;
        return await getCustomRepository(ProjectRepository).update({id: params.id}, project);
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};