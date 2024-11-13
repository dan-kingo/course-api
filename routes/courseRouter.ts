import { Router } from "express";
import { courses } from "..";
import { validateData } from "../middlewares/validationMiddleware";
import schema from "../schemas/courseSchemas";
import addCourse from "../controllers/addCourseController";
import updateCourse from "../controllers/updateCourseController";
import deleteCourse from "../controllers/deleteCourseController";

const router = Router();

router.get("/courses", (_req, res) => {
  res.send(courses);
});

router.get("/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course)
    res.status(404).send(`ther is no course with id ${req.params.id}`);
  res.send(course);
});

router.post("/courses", validateData(schema), addCourse);
router.put("/courses/:id", validateData(schema), updateCourse);
router.delete("/courses/:id", validateData(schema), deleteCourse);

export default router;
