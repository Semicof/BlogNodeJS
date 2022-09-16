const express= require("express");
const router=express.Router();

const MeController=require("../app/controllers/MeController");

router.get("/my-course/:slug/edit",MeController.edit);
router.get("/my-recycle-bin",MeController.recycle);
router.get("/my-course",MeController.showMyCourse);

module.exports=router;