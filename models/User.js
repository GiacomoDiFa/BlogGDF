const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
},{
    timestamp:true
})

const userModel = mongoose.model('User',userSchema);
module.exports = userModel;