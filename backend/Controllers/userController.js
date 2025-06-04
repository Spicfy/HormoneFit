// API to book appointment
import Booking from "../Models/Booking";
import Doctor from "../Models/Doctor";
import User from "../Models/User";

const bookAppointment = async (req, res) => {
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
        const booking = new Booking({
            _id: new mongoose.Types.ObjectId().toString(),
            user_id: userId,
            doctor_id: doctorId,
            appointment_date: date,
            appointment_time: time,
            type: type,
            fee: docData.doctor_fee
        })
        const savedBooking = await booking.save();
        res.json({success: true, message: "Appointment booked successfully", booking: savedBooking});
        


    }catch(error){
        res.json({success: false, message: error.message})
    }
}