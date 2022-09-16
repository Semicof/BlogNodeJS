const Course=require("../models/Course");

class MeController{
    showMyCourse(req,res,next){
        Promise.all([Course.find({}).lean(), Course.countDocumentsDeleted()])
        .then(([courses,num])=>{
            res.render("me/my-course",{courses,num});
        })
        .catch(next);
    }
    edit(req,res,next){
        Course.findOne({slug:req.params.slug}).lean()
        .then(course=>{
            res.render("me/course-detail",{course});
        })
        .catch(next);
    }
    recycle(req,res,next){
        Course.findDeleted({}).lean()
        .then(course=>{
            res.render("me/my-recycle-bin",{course});
        })
        .catch(next);
    }
}

module.exports = new MeController;

