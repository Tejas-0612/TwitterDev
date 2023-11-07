import CommentService from "../services/comment-service.js";


const commentService=new CommentService();

export const createComment=async(req,res)=>{
    try {
        const response=await commentService.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        console.log(response);
        return res.status(201).json({
            success:true,
            message:'Successfully created a comment',
            data:response,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:'Something went wrong in commet Controller'
        });
    }
}