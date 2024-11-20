import {Router} from 'express';
import { createAuthor, getAuthors } from '../controllers/authorController';
import { validateData } from '../middlewares/validationMiddleware';
import authorSchema from '../schemas/authorSchema';

const authorsRouter = Router();

authorsRouter.post('/authors',validateData(authorSchema), createAuthor);
authorsRouter.get('/authors', getAuthors);
export default authorsRouter;