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
        await getCustomRepository(UserRepository).delete({id: params.id});
        return {success: true};
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};