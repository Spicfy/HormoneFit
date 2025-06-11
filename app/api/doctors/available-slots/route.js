import { NextResponse } from 'next/server';
import Doctor from '../../../../backend/Models/Doctor';
import connectDB from '../../../../backend/configs/db';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const date = searchParams.get('date');

        if (!date) {
            return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
        }

        await connectDB();

        // Get all doctors
        const doctors = await Doctor.find({ is_verified: true });

        // Convert date string to Date object
        const selectedDate = new Date(date);
        const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'lowercase' });
        const dateStr = selectedDate.toISOString().split('T')[0];

        // Get available slots for all doctors
        const availableSlots = new Map(); // Changed to Map to store duration info

        doctors.forEach(doctor => {
            // Check default availability for the day
            const dayAvailability = doctor.availability.defaultAvailability[dayOfWeek] || [];

            // Check if there are any overrides for this specific date
            const overrideAvailability = doctor.availability.overrides.get(dateStr) || [];

            // Use override if it exists, otherwise use default
            const timeRanges = overrideAvailability.length > 0 ? overrideAvailability : dayAvailability;

            // Get booked slots for this date
            const bookedSlots = doctor.slots_booked[dateStr] || [];

            // Generate slots within each time range
            timeRanges.forEach(range => {
                const start = new Date(`1970-01-01T${range.start_time}`);
                const end = new Date(`1970-01-01T${range.end_time}`);
                const slotDuration = range.slot_duration;

                // Generate slots based on the specified duration
                while (start < end) {
                    const timeSlot = start.toLocaleTimeString('en-US', {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit'
                    });

                    // Check if slot is available (not booked)
                    if (!bookedSlots.includes(timeSlot)) {
                        // If slot already exists with a different duration, use the shorter duration
                        if (availableSlots.has(timeSlot)) {
                            const existingDuration = availableSlots.get(timeSlot);
                            availableSlots.set(timeSlot, Math.min(existingDuration, slotDuration));
                        } else {
                            availableSlots.set(timeSlot, slotDuration);
                        }
                    }

                    // Add slot duration minutes
                    start.setMinutes(start.getMinutes() + slotDuration);
                }
            });
        });

        // Convert Map to array of objects with time and duration
        const slots = Array.from(availableSlots).map(([time, duration]) => ({
            time,
            duration
        })).sort((a, b) => a.time.localeCompare(b.time));

        return NextResponse.json({
            success: true,
            availableSlots: slots
        });

    } catch (error) {
        console.error('Error fetching available slots:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
