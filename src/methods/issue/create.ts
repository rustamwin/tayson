/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {Issue} from "../../entity/Issue";
import {IssueRepository} from "../../repository/IssueRepository";

module.exports = async (params: Issue) => {
    try {
        const issue = new Issue();
        issue.text = params.text;
        issue.done = params.done;
        issue.project = params.project;
        return await getCustomRepository(IssueRepository).save(issue);
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};