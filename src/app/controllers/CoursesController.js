const Course = require("../models/Course");

class CoursesController {
  show(req, res, next) {
    console.log("slug: ");
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = { ...req.body };
    formData.img = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCML-byK5TPhWN_-ZuZal4h5KasYw`;
    const course = new Course(formData);
    let slug = "./" + formData.slug;
    course
      .save()
      .then(() => res.redirect(slug))
      .catch(next);
  }
  update(req, res, next) {
    Course.updateOne({ slug: req.params.slug }, req.body)
      .then(() => res.redirect("/me/my-course"))
      .catch(next);
  }
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  execute(req, res, next) {
    // res.json(req.body);
    switch (req.body.action) {
      case "delete":
        req.body.checkedId.forEach((id) => {
          Course.delete({ _id: id })
            .then(() => res.redirect("back"))
            .catch(next);
        });
    }
  }
  executeRba(req, res, next) {
    // res.json(req.body);
    switch (req.body.action) {
      case "delete":
        req.body.checkedId.forEach((id) => {
            Course.deleteOne({ _id: id })
            .then(() => res.redirect("back"))
            .catch(next);
        });
        break;
      case "restore":
        req.body.checkedId.forEach((id) => {
            Course.restore({ _id: id })
            .then(() => res.redirect("back"))
            .catch(next);
        });
        break;
    }
  }
}

module.exports = new CoursesController();
