// API to book appointment
import Appointment from "../Models/Appointment.js";
import Doctor from "../Models/Doctor.js";
import User from "../Models/User.js";





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