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
    isCompleted: {
        type: Boolean,
        default: false
    },
    
    // Calendly Integration Fields
    calendly_event_uuid: {
        type: String,
        // UUID of the corresponding Calendly event
    },
    calendly_event_uri: {
        type: String,
        // Full URI of the Calendly event
    },
    calendly_booking_url: {
        type: String,
        // Single-use booking URL generated for the patient
    },
    calendly_expires_at: {
        type: Date,
        // When the booking URL expires
    },
    calendly_status: {
        type: String,
        enum: ['active', 'canceled'],
        // Status from Calendly
    },
    calendly_location: {
        type: String,
        // Location info from Calendly (could be different from our location field)
    },
    calendly_meeting_url: {
        type: String,
        // Video meeting URL if it's an online appointment
    },
    calendly_invitee_uuid: {
        type: String,
        // UUID of the invitee in Calendly
    },
    last_calendly_sync: {
        type: Date,
        // When we last synced with Calendly
    },
    cancellation_reason: {
        type: String,
        // Reason for cancellation
    },
    cancelled_at: {
        type: Date,
        // When the appointment was cancelled
    },
    
    // Additional fields for better appointment management
    notes: {
        type: String,
        // Doctor's or patient's notes
    },
    reminder_sent: {
        type: Boolean,
        default: false
    },
    follow_up_required: {
        type: Boolean,
        default: false
    }
    
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;