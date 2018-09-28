/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {TodoRepository} from "../../repository/TodoRepository";

module.exports = async (params: any) => {
    try {
        return await getCustomRepository(TodoRepository).find(params);
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};