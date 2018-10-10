/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../repository/UserRepository";
import {User} from "../../entity/User";

module.exports = async (user: User) => {
    try {
        await getCustomRepository(UserRepository).save(user);
        return {success: true};
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};