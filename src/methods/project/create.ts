/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {Project} from "../../entity/Project";
import {getCustomRepository} from "typeorm";
import {ProjectRepository} from "../../repository/ProjectRepository";

module.exports = async (params: Project) => {
    try {
        const project = new Project();
        project.name = params.name;
        project.info = params.info;
        return getCustomRepository(ProjectRepository).save(project);
    } catch (e) {
        console.log(e);
        return Promise.reject({message: e.message});
    }
};
