const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageUrls:[String]
},{
    timestamp:true
})

const postModel = mongoose.model('Post',postSchema);
module.exports = postModel;