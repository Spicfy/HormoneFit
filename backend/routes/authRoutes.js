import express from 'express';
import { login, logout, register,sendVerifyEmail, forgotPassword } from '../Controllers/authController.js';
import protect from '../middleware/authMiddleware.js'; // Middleware to protect routes if needed
const router = express.Router();


router.post("/register", register);
router.post("/login", login)
router.post("/logout",  logout);


router.post("/send-verify-email", protect, sendVerifyEmail); 
router.post("/forgot-password", forgotPassword);

export default router;
