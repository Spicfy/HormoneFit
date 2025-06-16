import mongoose from "mongoose";
import { unique } from "next/dist/build/utils.js";

const timeSlotSchema = new mongoose.Schema(
	{
		start_time: { type: String, required: true },
		end_time: { type: String, required: true },
	},
	{ _id: false },
);

const appointmentTypeSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: ["menopause", "psychiatry", "other"],
			default: "menopause",
			required: true,
		},
		duration: { type: Number, required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ _id: false },
);

const doctorSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		profile_picture: {
			type: String,
		},
		professional_photo: {
			type: String,
		},
		date_of_birth: {
			type: Date,
			required: true,
		},
		specialty: {
			type: String,
			required: true,
		},
		address: {
			type: String,
		},
		phone: {
			type: String,
			required: true,
		},
		education: [
			{
				degree: { type: String, required: true },
				institution: { type: String, required: true },
				year_graduated: { type: Number, required: true },
				certification: { type: String },
			},
		],
		years_of_experience: {
			type: Number,
		},
		bio: {
			type: String,
		},
		languages_spoken: [
			{
				type: String,
			},
		],
		is_verified: {
			type: Boolean,
			default: false,
		},
		weekly_schedule: {
			monday: [timeSlotSchema],
			tuesday: [timeSlotSchema],
			wednesday: [timeSlotSchema],
			thursday: [timeSlotSchema],
			friday: [timeSlotSchema],
			saturday: [timeSlotSchema],
			sunday: [timeSlotSchema],
		},
		schedule_overrides: [
			{
				date: { type: Date, required: true },
				time_slots: [timeSlotSchema],
			},
		],
		bookings: [
			{
				date: { type: Date, required: true },
				time_slots: { type: timeSlotSchema, required: true },
			},
		],
		booking_types: [appointmentTypeSchema],
	},
	{ timestamps: true },
	{ minimize: false },
);

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
