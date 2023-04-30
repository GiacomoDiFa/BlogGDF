const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const uri = "mongodb+srv://giacomodfabrizio:3MTVecUhZfJ0BRxb@cluster0.vcjyj8d.mongodb.net/BlogDB?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology : true, useNewUrlParser : true});
var connection = mongoose.connection;
connection.on('error', ()=>{console.log('MongoDB connection failed')});
connection.on('connected', ()=>{console.log('MongoDB connection succesfull')});
module.exports = mongoose;