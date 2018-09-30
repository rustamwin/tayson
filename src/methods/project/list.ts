/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {Project} from "../../entity/Project";
import {getCustomRepository} from "typeorm";
import {ProjectRepository} from "../../repository/ProjectRepository";

exports = async (params: Project) => {
    try {
        return await getCustomRepository(ProjectRepository).find({});
    } catch (e) {
        return Promise.reject({message: e.message});
    }
};
