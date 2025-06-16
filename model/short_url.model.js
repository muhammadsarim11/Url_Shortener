import mongoose from "mongoose";
  
const Short_url =  new mongoose.Schema({
full_url:{
    type: String,
    required: true,
},
short_url: {
    type: String,
    required: true,
    unique: true,
    index: true,
},
clicks:{
    type: Number,
    default: 0,
}
,
User:{
type: mongoose.Schema.Types.ObjectId,
ref: 'User',
}

}, { timestamps: true });


const ShortUrl = mongoose.model('ShortUrl', Short_url);
export default ShortUrl;