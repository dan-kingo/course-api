import {Router} from 'express';
import { createAuthor, getAuthors } from '../controllers/authorController';
import { validateData } from '../middlewares/validationMiddleware';
import authorSchema from '../schemas/authorSchema';

const authorsRouter = Router();

authorsRouter.post('/',validateData(authorSchema), createAuthor);
authorsRouter.get('/', getAuthors);
export default authorsRouter;