/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {ProjectRepository} from "../../repository/ProjectRepository";
import {Issue} from "../../entity/Issue";

module.exports = async (params: Issue) => {
    try {
        return await getCustomRepository(ProjectRepository).delete({id: params.id});
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};