import express from 'express';
import { createUser, login } from '../controllers/user.js';

const loginRouter = express.Router();

// router.get('/', auth, getUsers);
// router.post('/signup', createUser);
loginRouter.post('/', login);

export default loginRouter;
