/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {TodoRepository} from "../../repository/TodoRepository";
import {Todo} from "../../entity/Todo";

module.exports = async (params: Todo) => {
    try {
        return await getCustomRepository(TodoRepository).update({id: params.id}, new Todo(params.text, params.done, new Date()));
    } catch (error) {
        console.log(error);
        return Promise.reject({message: error.message});
    }
};