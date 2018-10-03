/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {IssueRepository} from "../../repository/IssueRepository";
import {Issue} from "../../entity/Issue";

module.exports = async (issue: Issue) => {
    try {
        delete issue.updatedAt;
        return await getCustomRepository(IssueRepository).update({id: issue.id}, issue);
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};