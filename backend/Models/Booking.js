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
    userDate: {type: Object, required: true},
    doctorDate: {type: Object, required: true},
    type:{
        type: String,
        enum: ['Initial Consultation', 'Follow-up Appointment', 'Urgent Care'],
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    cancelled: {
        type: Boolean,
        default: false
    },

    payment: {type: Boolean, default: false},

    isCompleted: {
        type: Boolean,
        default: false
    }

})

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;