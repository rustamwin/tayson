/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {IssueRepository} from "../../repository/IssueRepository";
import {Issue} from "../../entity/Issue";

module.exports = async (params: Issue) => {
    try {
        const issue = new Issue();
        issue.text = params.text;
        return await getCustomRepository(IssueRepository).update({id: params.id}, issue);
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};