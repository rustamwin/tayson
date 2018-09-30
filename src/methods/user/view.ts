/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {Project} from "../../entity/Project";
import {ProjectRepository} from "../../repository/ProjectRepository";

module.exports = async (params: Project) => {
    try {
        return await getCustomRepository(ProjectRepository).find(params);
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};