import Like from "../models/like";
import crudRepository from "./crud-repository";

class LikeRepository extends crudRepository{

    constructor(){
        super(Like);
    }
}

export default LikeRepository;