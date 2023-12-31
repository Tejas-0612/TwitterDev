import TweetService from '../services/tweet-service.js';

const tweetService=new TweetService();

export const createTweet=async(req,res)=>{
    try {
        const response=await tweetService.create(req.body);
        console.log("response",response);
        return res.status(201).json({
            success:true,
            message:'successfully created a new tweet',
            data:response,
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            err:error
        });
    }
}