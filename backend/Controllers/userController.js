import Appointment from "../Models/Appointment.js";
import Doctor from "../Models/Doctor.js";
import User from "../Models/User.js";
import Token from "../Models/Token.js";

export const getCurrentUser = async (req, res) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			return res
				.status(401)
				.json({ success: false, message: "No Token provided" });
		}
		const decode = JsonWebTokenError.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decode.id).select("-password");

		res.json({ user, userId: decode.id, success: true });
	} catch (error) {}
};

export const bookAppointment = async (req, res) => {
	try {
		const {
			user_id,
			doctor_id,
			booking: times,
			booking_type,
			notes,
		} = req.body;

		const docData = await Doctor.findById(doctor_id).select("-password");

		if (!docData) {
			return res.status(404).json({
				success: false,
				message: `No Doctor Found with ID: ${doctor_id}`,
			});
		}

		const bookings = docData.bookings?.filter(
			(o) => o.date.toISOString() === times.date,
		);

		for (const books of bookings) {
			console.log(
				books.time_slots.start_time <= times.time_slots.start_time &&
					times.time_slots.start_time <= books.time_slots.end_time,
			);
			if (
				(books.time_slots.start_time <= times.time_slots.start_time &&
					times.time_slots.start_time <= books.time_slots.end_time) ||
				(books.time_slots.start_time <= times.time_slots.end_time &&
					times.time_slots.end_time <= books.time_slots.end_time) ||
				(times.time_slots.start_time <= books.time_slots.start_time &&
					times.time_slots.end_time >= books.time_slots.end_tim)
			) {
				return res.json({
					success: false,
					message: "Slot already booked.",
				});
			}
		}

		// const userData = await User.findById(user_id).select('-password');
		// if(!userData){
		//     return res.json({success: false, message: "User not found."});
		// }

		const booking = new Appointment({
			user_id: user_id || "684c5466e5afd34b55e346b6",
			doctor_id: doctor_id,
			appointment_date: times.date,
			start_time: times.time_slots.start_time,
			end_time: times.time_slots.end_time,
			notes: notes,
			type: booking_type,
			// status: status,
		});

		const savedBooking = await booking.save();

		await Doctor.findByIdAndUpdate(doctor_id, {
			bookings: [...docData.bookings, times],
		});

		res.json({
			success: true,
			message: "Appointment booked successfully",
			booking: savedBooking,
		});
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
	//cancel appointment API
};
export const cancelAppointment = async (req, res) => {
	try {
		const { userId, AppointmentId } = req.body;

		const bookingData = await Appointment.findById(bookingId);
		//verify appointment user
		if (bookingData.user_id !== userId) {
			return res.json({
				success: false,
				message:
					"You are not authorized to cancel to cancel this appointment.",
			});
		}
		await Appointment.findByIdAndUpdate(AppointmentId, {
			cancelled: true,
			status: "cancelled",
		});
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};

export const listAppointments = async (req, res) => {
	try {
		const { userId } = req.body;

		const appointments = await Appointment.find({ user_id: userId });

		res.json({ success: true, appointments });
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};

export const verifyEmail = async (req, res) => {
	try {
		console.log("--- Starting Email Verification ---");
		const userId = req.params.id;
		const myToken = req.params.token;
		console.log(
			`Attempting to verify user ID: ${userId} with token: ${myToken}`,
		);

		// Step A: Find the user
		console.log("Finding user in database...");
		const user = await User.findById(userId);

		// This will crash if the userId is not a valid mongoose ID format
		if (!user) {
			console.error("User not found for ID:", userId);
			return res
				.status(400)
				.json({
					success: false,
					message: "Invalid link: User not found.",
				});
		}
		console.log("User found:", user.email);

		// Step B: Find the token
		console.log("Finding token in database...");
		const verifyToken = await Token.findOne({
			userId: user._id,
			token: myToken,
		});

		if (!verifyToken) {
			console.error("Token not found or does not match user.");
			return res
				.status(400)
				.json({ success: false, message: "Invalid or expired link." });
		}
		console.log("Token found for user:", user.email);

		// Step C: Update the user
		console.log("Updating user 'isVerified' status to true...");
		await User.updateOne({ _id: user._id }, { $set: { isVerified: true } });
		console.log("User status updated successfully.");

		// Step D: Delete the token
		console.log("Deleting used token...");
		await Token.findByIdAndDelete(verifyToken._id);
		console.log("Token deleted successfully.");

		// Step E: Send final response
		console.log("--- Verification Complete. Sending success response. ---");
		return res.json({
			success: true,
			message: "Email verified successfully",
		});

		// Or if you want to redirect:
		// console.log("--- Verification Complete. Redirecting user. ---");
		// return res.redirect(`${process.env.FRONTEND_URL}/login?verified=true`);
	} catch (error) {
		// This block catches the crash!
		console.error("!!!!!! CRASH INSIDE verifyEmail !!!!!!");
		console.error(error); // This will print the full error object
		return res
			.status(500)
			.json({ success: false, message: "Internal server error." });
	}
};
