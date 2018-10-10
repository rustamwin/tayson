/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {ProjectRepository} from "../../repository/ProjectRepository";
import {Project} from "../../entity/Project";

module.exports = async (project: Project) => {
    try {
        return await getCustomRepository(ProjectRepository).save(project);
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};