import { CommentRepository,TweetRepository } from "../repository/index.js";

class CommentService{
    constructor(){
        this.commentRepository=new CommentRepository();
        this.tweetRepository=new TweetRepository();
    }

    async create(modelId,modelType,userId,content){
        if(modelType=='Tweet'){
            console.log('Inside model type');
            var commentable=await this.tweetRepository.get(modelId);
            console.log("Commentable",commentable)
            
        }else if(modelType=='Comment'){
            var commentable=await this.commentRepository.get(modelId);
            
        }else{
            throw new Error('unknow model type');
        }

        const comment=await this.commentRepository.create({
            content:content,
            userId:userId,
            onModel:modelType,
            commentable:modelId,
            comments:[]
        });
        commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }
}

export default CommentService;