import express from "express";
import {PORT} from "./config/serverConfig.js";
import {connect} from "./config/database.js";
import bodyParser from "body-parser";
const app=express();

import ApiRoutes from './routes/index.js';  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRoutes);

app.listen(PORT,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
    
});  