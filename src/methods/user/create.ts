/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {User} from "../../entity/User";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../repository/UserRepository";

module.exports = async (params: User) => {
    try {
        const user = new User();
        user.firstName = params.firstName;
        user.lastName = params.lastName;
        return getCustomRepository(UserRepository).save(user);
    } catch (e) {
        return Promise.reject({message: e.message});
    }
};
