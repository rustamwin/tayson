import {EntityRepository, Repository} from "typeorm";
import {Customer} from "../entity/Customer";

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

    findByName(firstName: string, lastName: string) {
        return this.findOne({firstName, lastName});
    }

}