import { Router } from "express";
import { createUser } from "../controllers/userController";
import { validateData } from "../middlewares/validationMiddleware";
import userScehma from "../schemas/userSchema";

const userRouter = Router();

userRouter.post("/",validateData(userScehma), createUser)

export default userRouter