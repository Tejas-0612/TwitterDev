import CrudRepository from "./crud-repository.js";
import Comment from "../models/comment.js";

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }

    async create(data){
        try {
            console.log(data);
            const result=await Comment.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async get(id){
        try {
            console.log(id)
            const result=await Comment.findById(id);
            console.log(result)
            return result;  
        } catch (error) {
            throw error;
        }
    }
}

export default CommentRepository;