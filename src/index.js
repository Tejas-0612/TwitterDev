import express from "express";
import {PORT} from "./config/serverConfig.js";
import {connect} from "./config/database.js";
import bodyParser from "body-parser";
const app=express();

// import TweetService from "./services/tweet-service.js";
import ApiRoutes from './routes/index.js';  
import {UserRepository,TweetRepository} from './repository/index.js'
import LikeService from "./services/like-service.js";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRoutes);

app.listen(PORT,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
   
    // const userRepo=new UserRepository();
    // const tweetRepo=new TweetRepository();
    // const tweets=await tweetRepo.getAll(0,10);
    // const users=await userRepo.getAll();
    // console.log(users[0]);
    
    // const user=await userRepo.create({
    //     email:'xyz@gmail.com',
    //     password:'abcdef',
    //     name:'Tejas1'
    // });
    // const likeService=new LikeService();
    // await likeService.ToggleLike(tweets[0].id,'Tweet',users[0].id);
    
});  