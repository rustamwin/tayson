/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {IssueRepository} from "../../repository/IssueRepository";
import {Issue} from "../../entity/Issue";
import {ProjectRepository} from "../../repository/ProjectRepository";

module.exports = async (issue: Issue) => {
    try {
        delete issue.updatedAt;
        issue.project = await getCustomRepository(ProjectRepository).findOne(issue.id);
        await getCustomRepository(IssueRepository).update({id: issue.id}, issue);
        return {success: true};
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};