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

router.get("/", getAllCourse);
router.get("/:id", getCourse);
router.post("/", validateData(schema), addCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
