import express from 'express';
import * as userController from '../controllers/userController';
// import { authenticate } from '../middleware/auth';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
// router.get('/', authenticate, userController.getUsers);
router.get('/', userController.getUsers);

export default router;