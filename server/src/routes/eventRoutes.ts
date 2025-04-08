import express from 'express';
import * as eventController from '../controllers/eventController';
// import { authenticate } from '../middleware/auth';

const router = express.Router();

// router.use(authenticate);

router.post('/', eventController.createEvent);
router.get('/', eventController.getEvents);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

export default router;