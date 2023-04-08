import * as express from 'express';
import usersRouter from './user.router';

const router = express.Router();

router.use('/users', usersRouter)
router.use((_req, res) => res.sendStatus(404))

export default router;
