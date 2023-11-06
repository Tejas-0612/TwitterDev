import mongoose from 'mongoose';

const hashtagSchema=new mongoose.Schema({
    title:{
        type:String,
        requied:true
    },
    tweets:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Tweet'
        }
    ]
},{timestamps:true});

const Hashtag=mongoose.model('Hashtag',hashtagSchema);
export default Hashtag;