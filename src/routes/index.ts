import * as express from 'express';
import usersRouter from './user.router';

const router = express.Router();

router.use('/users', usersRouter)
router.use('/', (req, res) => res.json('hello world!'))

export default router;
