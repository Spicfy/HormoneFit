import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

	first_name: {
		type: String, required: true
	},
	last_name: {
		type: String, required: true
	},
	email: {
		type: String, required: true, unique: true
	},
	password: {
		type: String, required: true
	},
	profile_picture: {
		type: String
	},
	postalCode: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	date_of_birth: {
		type: Date,
		required: true
	},
	sex: {
		type: String, enum: ['male', 'female', 'other'],
		required: true

	},
	healthCardNumber: {
		type: String,
		required: true
	},
	resetPasswordToken: String,
	resetPasswordExpiresAt: Date


}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
