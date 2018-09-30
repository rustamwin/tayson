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
        const issue = new Issue();
        issue.text = params.text;
        issue.project = params.project;
        return await getCustomRepository(ProjectRepository).save([issue]);
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};