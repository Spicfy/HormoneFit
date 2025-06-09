import express from 'express';
import { bookAppointment}  from '../Controllers/userController.js';
import protect from '../middleware/authMiddleware.js'

const router = express.Router();
router.post('/book-appointment',protect, bookAppointment)

export default router;