// calendly-functions.js - Corrected version
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
import axios from 'axios';

// Initialize Calendly API client
const calendly = axios.create({
  baseURL: 'https://api.calendly.com',
  headers: {
    'Authorization': `Bearer ${process.env.CALENDLY_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// 1. Fetch Available Slots for a Doctor
async function getAvailableSlots(eventTypeUri, dateRangeStart, dateRangeEnd) {
  try {
    const response = await calendly.get('/event_type_available_times', {
      params: {
        event_type: eventTypeUri, // Should be full URI, not just UUID
        start_time: dateRangeStart,
        end_time: dateRangeEnd
      }
    });
   
    return response.data.collection;
  } catch (error) {
    console.error('Error fetching available slots:', error.response?.data || error.message);
    return [];
  }
}

// 2. Create New Appointment (Note: Direct booking requires paid plans)
async function createAppointment(eventTypeUri, patientEmail, patientName, slotTime) {
  try {
    // Most Calendly plans only support creating scheduling links, not direct bookings
    const response = await calendly.post('/scheduling_links', {
      max_event_count: 1,
      owner: eventTypeUri,
      owner_type: 'EventType'
    });

    return {
      scheduling_link: response.data.resource.booking_url,
      owner: response.data.resource.owner,
      owner_type: response.data.resource.owner_type
    };
  } catch (error) {
    console.error('Error creating appointment:', error.response?.data || error.message);
    throw error;
  }
}

// Alternative: Create single-use scheduling link with pre-filled info
async function createSingleUseLink(eventTypeUri, patientEmail, patientName) {
  try {
    const response = await calendly.post('/scheduling_links', {
      max_event_count: 1,
      owner: eventTypeUri,
      owner_type: 'EventType',
      pool: 'private' // Makes link private/single-use
    });

    // The patient would use this link to book their appointment
    return {
      booking_url: response.data.resource.booking_url,
      expires_at: response.data.resource.expires_at
    };
  } catch (error) {
    console.error('Error creating single-use link:', error.response?.data || error.message);
    throw error;
  }
}

// 3. Retrieve Appointment Details
async function getAppointments(userUri, count = 10, status = null) {
  try {
    const params = {
      uuid: userUri,
      count: count,
      sort: 'start_time:asc'
    };
    
    if (status) {
      params.status = status; // 'active', 'canceled'
    }

    const response = await calendly.get('/scheduled_events', { params });
   
    return response.data.collection.map(event => ({
      uuid: event.uuid,
      name: event.name,
      start_time: event.start_time,
      end_time: event.end_time,
      status: event.status,
      location: event.location,
      uri: event.uri,
      event_type: event.event_type,
      invitees_counter: event.invitees_counter
    }));
  } catch (error) {
    console.error('Error fetching appointments:', error.response?.data || error.message);
    return [];
  }
}

// 4. Get specific appointment details with invitees
async function getAppointmentDetails(eventUuid) {
  try {
    // Get event details
    const eventResponse = await calendly.get(`/scheduled_events/${eventUuid}`);
    const event = eventResponse.data.resource;

    // Get invitees
    const inviteesResponse = await calendly.get(`/scheduled_events/${eventUuid}/invitees`);
    const invitees = inviteesResponse.data.collection;

    return {
      event: {
        uuid: event.uuid,
        name: event.name,
        start_time: event.start_time,
        end_time: event.end_time,
        status: event.status,
        location: event.location,
        uri: event.uri
      },
      invitees: invitees.map(invitee => ({
        uuid: invitee.uuid,
        email: invitee.email,
        name: invitee.name,
        status: invitee.status,
        timezone: invitee.timezone
      }))
    };
  } catch (error) {
    console.error('Error fetching appointment details:', error.response?.data || error.message);
    return null;
  }
}

// 5. Cancel Appointment
async function cancelAppointment(eventUuid, reason = 'Canceled by request') {
  try {
    const response = await calendly.post(`/scheduled_events/${eventUuid}/cancellation`, {
      reason: reason
    });
    return {
      success: true,
      cancellation: response.data.resource
    };
  } catch (error) {
    console.error('Error canceling appointment:', error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data || error.message
    };
  }
}

// 6. Get user info (helper function)
async function getCurrentUser() {
  try {
    const response = await calendly.get('/users/me');
    return response.data.resource;
  } catch (error) {
    console.error('Error fetching user info:', error.response?.data || error.message);
    throw error;
  }
}

// 7. Get event types for user
async function getEventTypes(userUri) {
  try {
    const response = await calendly.get('/event_types', {
      params: { user: userUri }
    });
    return response.data.collection;
  } catch (error) {
    console.error('Error fetching event types:', error.response?.data || error.message);
    return [];
  }
}

export {
  getAvailableSlots,
  createAppointment,
  createSingleUseLink,
  getAppointments,
  getAppointmentDetails,
  cancelAppointment,
  getCurrentUser,
  getEventTypes
};