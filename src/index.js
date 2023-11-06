import express from "express";
import {PORT} from "./config/serverConfig.js";
import {connect} from "./config/database.js";
import bodyParser from "body-parser";
const app=express();

import TweetService from "./services/tweet-service.js";
import ApiRoutes from './routes/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRoutes);

app.listen(PORT,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
    // const service=new TweetService();
    // const tweet=await service.create({
    //     content:'This is my #Third tweet ! my name is xyz from #Delhi' 
    // });
    // console.log(tweet);
}); 