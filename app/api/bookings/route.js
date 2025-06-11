import { NextResponse } from 'next/server';
import Doctor from '@/backend/Models/Doctor';
import Appointment from '@/backend/Models/Appointment';
import dbConnect from '@/backend/config/dbConnect';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, notes, date, time } = body;

        if (!date || !time || !name || !email) {
            return NextResponse.json({
                success: false,
                message: 'Missing required fields'
            }, { status: 400 });
        }

        await dbConnect();

        // Find an available doctor for the selected time slot
        const selectedDate = new Date(date);
        const dateStr = selectedDate.toISOString().split('T')[0];
        const dayOfWeek = selectedDate.toLocaleLowerCase();

        const availableDoctor = await Doctor.findOne({
            is_verified: true,
            [`availability.defaultAvailability.${dayOfWeek}`]: time,
            [`slots_booked.${dateStr}`]: { $ne: time }
        });

        if (!availableDoctor) {
            return NextResponse.json({
                success: false,
                message: 'No doctors available for the selected time slot'
            }, { status: 400 });
        }

        // Create the appointment
        const appointment = new Appointment({
            user_name: name,
            user_email: email,
            doctor_id: availableDoctor._id,
            appointment_date: date,
            start_time: time,
            end_time: time, // You might want to calculate this based on appointment duration
            type: "Initial Consultation",
            fee: availableDoctor.consultation_fee || 0,
            symptoms: notes || "Not provided",
        });

        await appointment.save();

        // Update doctor's booked slots
        if (!availableDoctor.slots_booked[dateStr]) {
            availableDoctor.slots_booked[dateStr] = [];
        }
        availableDoctor.slots_booked[dateStr].push(time);
        await availableDoctor.save();

        return NextResponse.json({
            success: true,
            message: 'Appointment booked successfully',
            appointment
        });

    } catch (error) {
        console.error('Error booking appointment:', error);
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}
