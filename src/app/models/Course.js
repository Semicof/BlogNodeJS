const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name:{type:String},
    description:{type:String},
    category:{type:String},
    img:{type:String},
    slug:{type:String},
    createdTime:{type:Date,default:Date.now},
    updatedTime:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Course', course,'Courses');