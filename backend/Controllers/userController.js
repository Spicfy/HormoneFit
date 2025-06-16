// API to book appointment
import React from "react";
import Appointment from "../Models/Appointment.js";
import Doctor from "../Models/Doctor.js";


export const bookAppointment = async (req, res) => {
    try {
        const { user_id, doctor_id, booking:times, booking_type, notes } = req.body;

        const docData = await Doctor.findById(doctor_id).select('-password');

        if (!docData) {
            return res.status(404).json({
                success: false,
                message: `No Doctor Found with ID: ${doctor_id}`
            });
        }

		const bookings = docData.bookings?.filter(
			o => (o.date.toISOString() === times.date));


		for(const books of bookings){
			console.log(books.time_slots.start_time <= times.time_slots.start_time && times.time_slots.start_time <= books.time_slots.end_time);
			if((books.time_slots.start_time <= times.time_slots.start_time && times.time_slots.start_time <= books.time_slots.end_time ) ||
			(books.time_slots.start_time <= times.time_slots.end_time && times.time_slots.end_time <= books.time_slots.end_time ) ||
			(times.time_slots.start_time <= books.time_slots.start_time && times.time_slots.end_time >= books.time_slots.end_tim )
			){
				return res.json({success: false, message: "Slot already booked."});
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
        })

        const savedBooking = await booking.save();


        await Doctor.findByIdAndUpdate(doctor_id, {bookings: [...docData.bookings, times]});

        res.json({success: true, message: "Appointment booked successfully", booking: savedBooking});



    }catch(error){
        res.json({success: false, message: error.message})
    }
    //cancel appointment API

}
    export const cancelAppointment = async (req, res) => {
        try{
            const {userId, AppointmentId} = req.body;

            const bookingData = await Appointment.findById(AppointmentId);
            //verify appointment user
            if(bookingData.user_id !== userId){
                return res.json({success: false, message: "You are not authorized to cancel to cancel this appointment."})
            }
            await Appointment.findByIdAndUpdate(AppointmentId, {cancelled: true, status: 'cancelled' })


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