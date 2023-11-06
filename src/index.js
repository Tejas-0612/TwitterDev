import express from "express";
import {PORT} from "./config/serverConfig.js";
import {connect} from "./config/database.js";
const app=express();

import TweetService from "./services/tweet-service.js";

app.listen(PORT,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
    const service=new TweetService();
    const tweet=await service.create({
        content:'This is my #second tweet I joined the #twiter yesterday itself and i #Love it' 
    });
    console.log(tweet);
}); 