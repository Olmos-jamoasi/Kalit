import { getAllUsers } from "../controllers";
import * as express from 'express';

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers)

export default usersRouter;
