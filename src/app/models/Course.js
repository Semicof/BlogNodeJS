const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const course = new Schema({
    name:{type:String},
    description:{type:String},
    category:{type:String},
    img:{type:String},
    videoId:{type:String},
    slug:{type:String},
},{
    timestamps:true
});

course.plugin(mongooseDelete,{overrideMethods:true,deletedAt:true});

module.exports=mongoose.model('Course', course,'Courses');
