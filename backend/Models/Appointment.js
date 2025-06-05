import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    appointment_date: {
        type: Date,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Initial Consultation', 'Follow-up Appointment', 'Urgent Care'],
        required: true
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        default: 'Scheduled'
    },
    location: {
        type: String,
        enum: ['In-person', 'Online'],
        default: 'In-person'
    },
    fee: {
        type: Number,
        required: true
    },
    cancelled: {
        type: Boolean,
        default: false
    },
    payment: {
        type: Boolean, 
        default: false
    },
    symptoms: { // Fixed typo from "sympotoms"
        type: String,
        required: true
    },
    follow_up_required: {
        type: Boolean,
        default: false
    }
    
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;