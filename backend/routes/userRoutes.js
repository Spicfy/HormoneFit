import express from 'express';
import { bookAppointment, verifyEmail}  from '../Controllers/userController.js';
import protect from '../middleware/authMiddleware.js'

const router = express.Router();
router.post('/book-appointment',protect, bookAppointment)
router.get("/:id/verify/:token", verifyEmail)
export default router;