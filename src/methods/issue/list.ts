/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {IssueRepository} from "../../repository/IssueRepository";

module.exports = async (params: any) => {
    try {
        return await getCustomRepository(IssueRepository).find(params);
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};