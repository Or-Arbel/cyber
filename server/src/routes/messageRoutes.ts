import express from 'express';
import * as messageController from '../controllers/messageController';
// import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// router.use(authenticate);

router.post('/', messageController.createMessage);
router.get('/', messageController.getMessages);

export default router;