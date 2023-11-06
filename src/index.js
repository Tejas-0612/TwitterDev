const express=require('express');
const app=express();
const connect=require('./config/database');


// const {HastagRepository}=require('./repository/index');

app.listen(3000,async()=>{
    console.log('server started');
    
    await connect();
    console.log('Mongo db connected');
    // const tagsrepo=new HastagRepository();
    // const tags=await tagsrepo.create([
    //     {
    //         title:'Trend',
    //         tweets:[]
    //     },
    //     {
    //         title:'Love',
    //         tweets:[]
    //     },
    //     {
    //         title:'Cool',
    //         tweets:[]
    //     },
    //     {
    //         title:'MSD',
    //         tweets:[]
    //     },
    // ]);
    // console.log(tags);
});