import {EntityRepository, Repository} from "typeorm";
import {Driver} from "../entity/Driver";

@EntityRepository(Driver)
export class DriverRepository extends Repository<Driver> {
    async findByToken(token) {
        await this.findOne({accessToken: token})
    }
}