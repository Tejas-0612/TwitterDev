import User from "../models/user.js";
import crudRepository from "./crud-repository.js";

class UserRepository extends crudRepository{

    constructor(){
        super(User);
    }

    async create(data){
        try {
            const res=await User.create(data);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            const res=await User.find();
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserRepository; 