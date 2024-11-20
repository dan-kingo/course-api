import {Router} from 'express';
import { createAuthor, getAuthors } from '../controllers/authorController';

const authorsRouter = Router();

authorsRouter.post('/authors', createAuthor);
authorsRouter.get('/authors', getAuthors);
export default authorsRouter;