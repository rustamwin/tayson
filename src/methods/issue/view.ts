/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {IssueRepository} from "../../repository/IssueRepository";

module.exports = async (params: any) => {
    try {
        return await getCustomRepository(IssueRepository).findOne(params, {
            relations: ["assigners"],
            /*join: {
                alias: 'issue',
                leftJoinAndSelect: {
                    assigners: 'user'
                }
            }*/
        });
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};