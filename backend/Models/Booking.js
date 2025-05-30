import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    user_id:{
        type:String,
        required: true
    },
    doctor_id: {
        type: String,
        required: true
    },
    appointment_date: {
        type: Date,
        required: true
    },
    appointment_time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    type:{
        type: String,
        enum: ['Initial Consultation', 'Follow-up Appointment', 'Urgent Care' ],
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;