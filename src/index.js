import express from "express";
import {PORT} from "./config/serverConfig.js";
import {connect} from "./config/database.js";
import bodyParser from "body-parser";
import passport from "passport";
const app=express();

import ApiRoutes from './routes/index.js';  
import { passportAuth } from "./config/jwt-middleware.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRoutes);

app.use(passport.initialize());
passportAuth(passport);

app.listen(PORT,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
    
});  