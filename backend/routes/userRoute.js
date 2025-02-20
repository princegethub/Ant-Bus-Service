import express from 'express';
import { getAllUsers, registerUser } from '../controller/userController.js';
import upload from '../middelwares/multer.js';

const router = express.Router();

// Route to register a new user
router.post('/register', upload.single("addharImage"), registerUser);
router.get('/userlist',  getAllUsers);

export default router;