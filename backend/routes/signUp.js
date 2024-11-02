import express from 'express';
import { createUser } from '../controllers/user.js';

const signUpRouter = express.Router();

signUpRouter.post('/', createUser);

export default signUpRouter;
