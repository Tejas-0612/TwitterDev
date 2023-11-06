const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    useEmail:{
        type:String
    },
    
},{timestamps:true});

const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;


// git remote add origin https://github.com/Tejas-0612/TwitterDev.git
// git push -u origin main