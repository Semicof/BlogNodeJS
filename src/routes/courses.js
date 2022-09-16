const express= require("express");
const router=express.Router();

const CoursesController=require("../app/controllers/CoursesController");

router.post("/execute-form-action",CoursesController.execute);
router.post("/execute-recycle-bin-action",CoursesController.executeRba);
router.get("/create",CoursesController.create);
router.get("/:slug",CoursesController.show);
router.post("/store",CoursesController.store);
router.put("/:slug",CoursesController.update);
router.patch("/:id/restore",CoursesController.restore);
router.delete("/:id",CoursesController.delete);
router.delete("/:id/destroy",CoursesController.destroy);

module.exports=router;