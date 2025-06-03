// controllers/appointmentController.js
import Appointment from "../Models/Appointment.js";
import Doctor from "../Models/Doctor.js";
import User from "../Models/User.js";
import axios from 'axios';
import {
    getAvailableSlots,
    getAppointments,
    getAppointmentDetails,
    cancelAppointment as cancelCalendlyAppointment,
    getCurrentUser,
    getEventTypes
} from "../services/calendly.js";

// Create Calendly client for specific doctor
const createDoctorCalendlyClient = (accessToken) => {
    return axios.create({
        baseURL: 'https://api.calendly.com',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    });
};

// Connect doctor to Calendly
export const connectDoctorToCalendly = async (req, res) => {
    try {
        const { doctorId, accessToken } = req.body;
        
        // Verify the access token by getting user info
        const calendlyClient = createDoctorCalendlyClient(accessToken);
        const userResponse = await calendlyClient.get('/users/me');
        const calendlyUser = userResponse.data.resource;
        
        // Get doctor's event types
        const eventTypesResponse = await calendlyClient.get('/event_types', {
            params: { user: calendlyUser.uri }
        });
        const eventTypes = eventTypesResponse.data.collection;
        
        // Update doctor record with Calendly info
        await Doctor.findByIdAndUpdate(doctorId, {
            calendly_user_uri: calendlyUser.uri,
            calendly_access_token: accessToken, // In production, encrypt this!
            calendly_email: calendlyUser.email,
            calendly_name: calendlyUser.name,
            calendly_event_types: eventTypes.map(et => ({
                name: et.name,
                uri: et.uri,
                slug: et.slug,
                duration: et.duration,
                booking_url: et.booking_url,
                description: et.description,
                active: et.active
            })),
            calendly_connected: true,
            calendly_last_sync: new Date()
        });
        
        res.json({
            success: true,
            message: "Doctor successfully connected to Calendly",
            calendly_user: {
                name: calendlyUser.name,
                email: calendlyUser.email,
                uri: calendlyUser.uri
            },
            event_types: eventTypes.length
        });
        
    } catch (error) {
        console.error('Calendly connection error:', error);
        res.json({
            success: false,
            message: "Failed to connect to Calendly. Please check your access token.",
            error: error.response?.data || error.message
        });
    }
};

// Get doctor's Calendly event types
export const getDoctorEventTypes = async (req, res) => {
    try {
        const { doctorId } = req.params;
        
        const doctor = await Doctor.findById(doctorId);
        if (!doctor || !doctor.calendly_connected) {
            return res.json({
                success: false,
                message: "Doctor not found or not connected to Calendly"
            });
        }
        
        // Fetch fresh event types from Calendly
        const calendlyClient = createDoctorCalendlyClient(doctor.calendly_access_token);
        const response = await calendlyClient.get('/event_types', {
            params: { user: doctor.calendly_user_uri }
        });
        
        const eventTypes = response.data.collection.filter(et => et.active);
        
        // Update doctor's event types in database
        await Doctor.findByIdAndUpdate(doctorId, {
            calendly_event_types: eventTypes.map(et => ({
                name: et.name,
                uri: et.uri,
                slug: et.slug,
                duration: et.duration,
                booking_url: et.booking_url,
                description: et.description,
                active: et.active
            })),
            calendly_last_sync: new Date()
        });
        
        res.json({
            success: true,
            event_types: eventTypes,
            doctor: {
                name: `${doctor.first_name} ${doctor.last_name}`,
                specialty: doctor.specialty
            }
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch event types",
            error: error.message
        });
    }
};

// Get available time slots for a specific doctor's event type
export const getAvailableTimeSlots = async (req, res) => {
    try {
        const { doctorId, eventTypeUri, startDate, endDate } = req.query;
        
        const doctor = await Doctor.findById(doctorId);
        if (!doctor || !doctor.calendly_connected) {
            return res.json({
                success: false,
                message: "Doctor not found or not connected to Calendly"
            });
        }
        
        // Get available slots from Calendly
        const calendlyClient = createDoctorCalendlyClient(doctor.calendly_access_token);
        const response = await calendlyClient.get('/event_type_available_times', {
            params: {
                event_type: eventTypeUri,
                start_time: startDate,
                end_time: endDate
            }
        });
        
        const availableSlots = response.data.collection;
        
        res.json({
            success: true,
            available_slots: availableSlots,
            doctor: {
                name: `${doctor.first_name} ${doctor.last_name}`,
                specialty: doctor.specialty,
                fee: doctor.doctor_fee || doctor.consultation_fee
            }
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch available slots",
            error: error.message
        });
    }
};

// Book appointment through Calendly
export const bookAppointmentWithCalendly = async (req, res) => {
    try {
        const {
            userId,
            doctorId,
            eventTypeUri,
            selectedDateTime,
            patientName,
            patientEmail,
            symptoms,
            appointmentType
        } = req.body;
        
        // Validate user and doctor
        const [user, doctor] = await Promise.all([
            User.findById(userId).select('-password'),
            Doctor.findById(doctorId).select('-password')
        ]);
        
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        
        if (!doctor || !doctor.calendly_connected) {
            return res.json({ success: false, message: "Doctor not found or not connected to Calendly" });
        }
        
        // Create scheduling link for the specific event type
        const calendlyClient = createDoctorCalendlyClient(doctor.calendly_access_token);
        const schedulingResponse = await calendlyClient.post('/scheduling_links', {
            max_event_count: 1,
            owner: eventTypeUri,
            owner_type: 'EventType'
        });
        
        const schedulingLink = schedulingResponse.data.resource;
        
        // Create local appointment record
        const appointment = new Appointment({
            user_id: userId,
            doctor_id: doctorId,
            appointment_date: new Date(selectedDateTime),
            start_time: new Date(selectedDateTime).toTimeString().slice(0, 5),
            end_time: new Date(new Date(selectedDateTime).getTime() + (30 * 60000)).toTimeString().slice(0, 5), // Default 30 min
            type: appointmentType || 'Initial Consultation',
            status: 'Pending', // Pending until Calendly booking is confirmed
            fee: doctor.doctor_fee || doctor.consultation_fee,
            symptoms: symptoms,
            calendly_booking_url: schedulingLink.booking_url,
            calendly_expires_at: new Date(schedulingLink.expires_at),
            calendly_event_type_uri: eventTypeUri
        });
        
        const savedAppointment = await appointment.save();
        
        res.json({
            success: true,
            message: "Appointment initiated successfully",
            appointment: savedAppointment,
            calendly_booking_url: schedulingLink.booking_url,
            instructions: "Please click the Calendly link to confirm your appointment time. Your appointment will be confirmed once you complete the Calendly booking."
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to book appointment",
            error: error.message
        });
    }
};

// Get doctor's appointments from Calendly
export const getDoctorAppointments = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const { status, startDate, endDate } = req.query;
        
        const doctor = await Doctor.findById(doctorId);
        if (!doctor || !doctor.calendly_connected) {
            return res.json({
                success: false,
                message: "Doctor not found or not connected to Calendly"
            });
        }
        
        // Get appointments from Calendly
        const calendlyClient = createDoctorCalendlyClient(doctor.calendly_access_token);
        const params = {
            user: doctor.calendly_user_uri,
            count: 100,
            sort: 'start_time:asc'
        };
        
        if (status) params.status = status;
        if (startDate) params.min_start_time = startDate;
        if (endDate) params.max_start_time = endDate;
        
        const response = await calendlyClient.get('/scheduled_events', { params });
        const calendlyEvents = response.data.collection;
        
        // Get corresponding local appointments
        const localAppointments = await Appointment.find({
            doctor_id: doctorId,
            ...(startDate && endDate && {
                appointment_date: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            })
        }).populate('user_id', 'first_name last_name email phone');
        
        // Merge Calendly and local data
        const mergedAppointments = calendlyEvents.map(event => {
            const localAppointment = localAppointments.find(
                apt => apt.calendly_event_uuid === event.uuid
            );
            
            return {
                calendly_event: event,
                local_appointment: localAppointment,
                patient_info: localAppointment?.user_id,
                status: event.status,
                start_time: event.start_time,
                end_time: event.end_time,
                event_type: event.event_type
            };
        });
        
        res.json({
            success: true,
            appointments: mergedAppointments,
            total: calendlyEvents.length
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch appointments",
            error: error.message
        });
    }
};

// Cancel appointment
export const cancelAppointment = async (req, res) => {
    try {
        const { appointmentId, reason = 'Cancelled by patient' } = req.body;
        const { userId } = req.body; // or get from auth middleware
        
        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.json({ success: false, message: "Appointment not found" });
        }
        
        // Verify user owns the appointment
        if (appointment.user_id.toString() !== userId) {
            return res.json({ 
                success: false, 
                message: "Not authorized to cancel this appointment" 
            });
        }
        
        // Cancel in Calendly if event exists
        if (appointment.calendly_event_uuid) {
            const doctor = await Doctor.findById(appointment.doctor_id);
            const calendlyClient = createDoctorCalendlyClient(doctor.calendly_access_token);
            
            try {
                await calendlyClient.post(`/scheduled_events/${appointment.calendly_event_uuid}/cancellation`, {
                    reason: reason
                });
            } catch (calendlyError) {
                console.error('Calendly cancellation error:', calendlyError);
            }
        }
        
        // Update local appointment
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            {
                status: 'Cancelled',
                cancelled: true,
                cancellation_reason: reason,
                cancelled_at: new Date()
            },
            { new: true }
        );
        
        res.json({
            success: true,
            message: "Appointment cancelled successfully",
            appointment: updatedAppointment
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to cancel appointment",
            error: error.message
        });
    }
};

// Webhook handler for Calendly events
export const handleCalendlyWebhook = async (req, res) => {
    try {
        const { event, payload } = req.body;
        
        switch (event) {
            case 'invitee.created':
                await handleAppointmentBooked(payload);
                break;
            case 'invitee.canceled':
                await handleAppointmentCancelled(payload);
                break;
            default:
                console.log('Unhandled webhook event:', event);
        }
        
        res.status(200).json({ success: true });
        
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Helper function to handle appointment booking confirmation
async function handleAppointmentBooked(payload) {
    const { event, invitee } = payload;
    
    // Find the pending appointment by booking URL or event type
    const appointment = await Appointment.findOne({
        calendly_event_type_uri: event.event_type,
        status: 'Pending',
        'user_id': { $exists: true }
    });
    
    if (appointment) {
        await Appointment.findByIdAndUpdate(appointment._id, {
            status: 'Scheduled',
            calendly_event_uuid: event.uuid,
            calendly_event_uri: event.uri,
            calendly_invitee_uuid: invitee.uuid,
            appointment_date: new Date(event.start_time),
            start_time: new Date(event.start_time).toTimeString().slice(0, 5),
            end_time: new Date(event.end_time).toTimeString().slice(0, 5),
            calendly_meeting_url: event.location?.join_url,
            last_calendly_sync: new Date()
        });
    }
}

// Helper function to handle appointment cancellation
async function handleAppointmentCancelled(payload) {
    const { event } = payload;
    
    const appointment = await Appointment.findOne({
        calendly_event_uuid: event.uuid
    });
    
    if (appointment) {
        await Appointment.findByIdAndUpdate(appointment._id, {
            status: 'Cancelled',
            cancelled: true,
            cancelled_at: new Date(),
            cancellation_reason: 'Cancelled via Calendly'
        });
    }
}

// Get user's appointments
// Get user's appointments
export const getUserAppointments = async (req, res) => {
    try {
        const { userId } = req.params;
        const { status, upcoming, page = 1, limit = 10 } = req.query; // Added pagination

        let query = { user_id: userId };

        if (status) {
            query.status = status; // e.g., 'Scheduled', 'Completed', 'Cancelled'
        }

        if (upcoming === 'true') {
            query.appointment_date = { $gte: new Date() }; // Appointments from today onwards
            if (!query.status) { // If no specific status, default to upcoming scheduled
                query.status = 'Scheduled';
            }
        } else if (upcoming === 'false') {
            query.appointment_date = { $lt: new Date() }; // Past appointments
        }

        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            populate: {
                path: 'doctor_id',
                select: 'first_name last_name specialty profile_image doctor_fee consultation_fee' // Select relevant doctor fields
            },
            sort: { appointment_date: upcoming === 'true' ? 1 : -1, start_time: upcoming === 'true' ? 1 : -1 } // Sort upcoming ascending, past descending
        };

        // Using mongoose-paginate-v2 if available, or a manual skip/limit
        // For this example, I'll use skip/limit. If you use a pagination library, adapt accordingly.
        const appointments = await Appointment.find(query)
            .populate(options.populate.path, options.populate.select)
            .sort(options.sort)
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .lean(); // Use .lean() for faster queries if you don't need Mongoose documents

        const totalAppointments = await Appointment.countDocuments(query);

        res.json({
            success: true,
            appointments,
            totalPages: Math.ceil(totalAppointments / options.limit),
            currentPage: options.page,
            totalAppointments
        });

    } catch (error) {
        console.error("Error fetching user appointments:", error);
        res.status(500).json({ // Using 500 for server errors
            success: false,
            message: "Failed to fetch appointments",
            error: error.message
        });
    }
};