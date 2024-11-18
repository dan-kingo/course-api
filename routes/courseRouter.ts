import { Router } from "express";
import { validateData } from "../middlewares/validationMiddleware";
import schema from "../schemas/courseSchemas";
import {
  addCourse,
  deleteCourse,
  getAllCourse,
  getCourse,
  updateCourse,
} from "../controllers/courseControllers";

const router = Router();

router.get("/courses", getAllCourse);
router.get("/courses/:id", getCourse);
router.post("/courses", validateData(schema), addCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);

export default router;
