/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {User} from "../../entity/User";
import {UserRepository} from "../../repository/UserRepository";

module.exports = async (user: User) => {
    try {
        return await getCustomRepository(UserRepository).findOne(user.id, {
            relations: ["issues"]
        });
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};