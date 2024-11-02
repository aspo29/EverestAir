import express from 'express';

// import { get } from "mongoose";

import {
  createApplication,
  getApplication,
  updateApplication,
  deleteApplication,
} from '../controllers/airApplication.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

//4 routes get , post=frontend send data to insert it  ,put ,delete

//All Request go to auth middleware to check the jwt token for autherization

router.get('/', auth, getApplication);

router.post('/', auth, createApplication);

router.delete('/:id', auth, deleteApplication);

//update partial data
router.patch('/:id', auth, updateApplication);

// router.get("/", getApplication);

// router.post("/", createApplication);

export default router;
