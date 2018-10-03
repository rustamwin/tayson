/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {User} from "../../entity/User";
import {UserRepository} from "../../repository/UserRepository";

module.exports = async (params: User) => {
    try {
        return await getCustomRepository(UserRepository).find(params);
    } catch (e) {
        return Promise.reject({message: e.message});
    }
};
