import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
	const {
		first_name,
		last_name,
		email,
		password,
		date_of_birth,
		sex,
		postalCode,
		healthCardNumber,
	} = req.body;
	if (
		!first_name ||
		!last_name ||
		!email ||
		!password ||
		!date_of_birth ||
		!sex ||
		!postalCode ||
		!healthCardNumber
	) {
		return res
			.status(400)
			.json({ message: "All fields are required", success: false });
	}
	try {
		const userExists = await User.findOne({ email });
		if (userExists) {
			return res
				.status(400)
				.json({ message: "User already exists", success: false });
		}

		if (password.length < 6) {
			return res.json({
				message: "Password must be at least 6 characters",
				success: false,
			});
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({
			_id: new mongoose.Types.ObjectId(),
			first_name,
			last_name,
			email,
			password: hashedPassword,
			date_of_birth,
			sex,
			postalCode,
			healthCardNumber,
		});
		const savedUser = await user.save();

		// Store user data in session
		req.session.user = {
			userId: savedUser._id,
			email: savedUser.email,
			firstName: savedUser.first_name,
		};

		return res.json({ success: true });
	} catch (error) {
		console.error("Error during registration:", error);
		return res.status(500).json({
			message: "Internal server error: " + error.message,
			success: false,
		});
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.json({ success: false, message: "User not found" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.json({ success: false, message: "Invalid credentials" });
		}
		console.log(req.session);
		// Store user data in session
		req.session.user = user._id;
		console.log(req.session.user);

		return res.json({ success: true });
	} catch (error) {
		return res.json({ success: false, message: error.message });
	}
};

export const logout = async (req, res) => {
	try {
		// Clear the session
		req.session.destroy();
		return res
			.status(200)
			.json({ success: true, message: "Logged out successfully" });
	} catch (error) {
		return res.json({ success: false, message: error.message });
	}
};

export const forgotPassword = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.json({ success: false, message: "User not found" });
		}
		// generate reset token
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET_KEY,
			{ expiresIn: "15m" },
		);

		// Send token to user's email
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD_APP_EMAIL,
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Internal server error: " + error.message,
		});
	}
};
