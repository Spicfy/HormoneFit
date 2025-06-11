// API to book appointment
import { useDeprecatedAnimatedState } from "framer-motion";
import Appointment from "../Models/Appointment.js";
import Doctor from "../Models/Doctor.js";
import User from "../Models/User.js";
import Token from "../Models/Token.js";




export const getCurrentUser = async (req, res) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({success:false, message: "No Token provided"})
        }
        const decode = JsonWebTokenError.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode.id).select('-password');

        res.json({user, userId: decode.id, success: true});
    }catch(error){

    }
}

export const bookAppointment = async (req, res) => {
    try{
        const {userId, doctorId, date, time, type} = req.body

        const docData= await Doctor.findById(doctorId).select('-password');
        if(!docData.available){
            return res.json({success: false, message: "Doctor is not available for booking at this time."});
        }
        const userData = await User.findById(userId).select('-password');
        if(!userData){
            return res.json({success: false, message: "User not found."});
        }
        const booking = new Appointment({

            user_id: userId,
            doctor_id: doctorId,
            appointment_date: date,
            appointment_time: time,
            type: type,
            fee: docData.doctor_fee
        })
        const savedBooking = await booking.save();


        await doctorModel.findByIdAndUpdate(doctorId, {slots_booked});

        res.json({success: true, message: "Appointment booked successfully", booking: savedBooking});
        


    }catch(error){
        res.json({success: false, message: error.message})
    }
    //cancel appointment API
 
}
    export const cancelAppointment = async (req, res) => {
        try{
            const {userId, AppointmentId} = req.body;

            const bookingData = await Appointment.findById(bookingId);
            //verify appointment user
            if(bookingData.user_id !== userId){
                return res.json({success: false, message: "You are not authorized to cancel to cancel this appointment."})
            }
            await Appointment.findByIdAndUpdate()
            

        }catch(error){
        res.json({success: false, message: error.message});
    }
}

export const listAppointments = async (req, res) => {
    try{    
        const {userId} = req.body;

        const appointments = await Appointment.find({user_id: userId})

        res.json({success:true, appointments})

    }catch(error){
        res.json({success: false, message: error.message});
    }
}

export const verifyEmail = async (req, res) => {
    try {
        console.log("--- Starting Email Verification ---");
        const userId = req.params.id;
        const myToken = req.params.token;
        console.log(`Attempting to verify user ID: ${userId} with token: ${myToken}`);

        // Step A: Find the user
        console.log("Finding user in database...");
        const user = await User.findById(userId);
        
        // This will crash if the userId is not a valid mongoose ID format
        if (!user) {
            console.error("User not found for ID:", userId);
            return res.status(400).json({ success: false, message: "Invalid link: User not found." });
        }
        console.log("User found:", user.email);

        // Step B: Find the token
        console.log("Finding token in database...");
        const verifyToken = await Token.findOne({
            userId: user._id,
            token: myToken
        });

        if (!verifyToken) {
            console.error("Token not found or does not match user.");
            return res.status(400).json({ success: false, message: "Invalid or expired link." });
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
        return res.json({ success: true, message: "Email verified successfully" });
        
        // Or if you want to redirect:
        // console.log("--- Verification Complete. Redirecting user. ---");
        // return res.redirect(`${process.env.FRONTEND_URL}/login?verified=true`);


    } catch (error) {
        // This block catches the crash!
        console.error("!!!!!! CRASH INSIDE verifyEmail !!!!!!");
        console.error(error); // This will print the full error object
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
};