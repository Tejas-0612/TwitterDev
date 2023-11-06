import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{

    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const like=await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data){
        try {
            const res=await Like.create(data);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

export default LikeRepository;