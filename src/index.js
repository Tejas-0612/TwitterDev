const express=require('express');
const app=express();
const connect=require('./config/database');
const {PORT}=require('./config/serverConfig');

const TweetService=require('./services/tweet-service'); 

app.listen(PORT,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
    const service=new TweetService();
    const tweet=await service.create({
        content:'This is my #first tweet I joined the #twiter today itself and i #Love it'
    });
    console.log(tweet);
}); 