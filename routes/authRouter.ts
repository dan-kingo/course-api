import {Router} from 'express';
import authenticate from '../controllers/authController';

const authRouter = Router();

authRouter.post('/', authenticate)

export default authRouter;