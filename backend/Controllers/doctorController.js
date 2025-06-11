import Doctor from "../Models/Doctor.js";
import mongoose from "mongoose";

export const test = async (req, res) => {
	console.log("API is working");
    res.send('Hello, World');
}

export const register = async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        date_of_birth,
        specialty,
        phone,
        education,
        doctor_fee,
        years_of_experience,
        consultation_fee,
        bio,
        languages_spoken,
        weekly_schedule,
		booking_types
    } = req.body;

    // Check required fields
    if (!first_name || !last_name || !email || !date_of_birth || !specialty || !phone) {
        return res.status(400).json({
            message: "Required fields: first name, last name, email, date of birth, specialty, and phone",
            success: false
        });
    }

    try {
        const doctorExists = await Doctor.findOne({ email });
        if (doctorExists) {
            return res.status(400).json({
                message: "Doctor with this email already exists",
                success: false
            });
        }

        const doctor = new Doctor({
            _id: new mongoose.Types.ObjectId(),
            first_name,
            last_name,
            email,
            date_of_birth,
            specialty,
            phone,
            education: education || [],
            doctor_fee,
            years_of_experience,
            consultation_fee,
            bio,
            languages_spoken: languages_spoken || [],
            weekly_schedule: weekly_schedule || {},
            schedule_overrides: [],
            slots_booked: {},
			booking_types: booking_types || [],
            is_verified: false
        });

        const savedDoctor = await doctor.save();

        return res.status(201).json({
            success: true,
            message: "Doctor registered successfully",
            data: {
                id: savedDoctor._id,
                first_name: savedDoctor.first_name,
                last_name: savedDoctor.last_name,
                email: savedDoctor.email,
                specialty: savedDoctor.specialty
            }
        });

    } catch (error) {
        console.error("Error during doctor registration:", error);
        return res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
};

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
            .select('-slots_booked'); // Exclude sensitive information

        return res.status(200).json({
            success: true,
            count: doctors.length,
            data: doctors
        });
    } catch (error) {
        console.error("Error fetching doctors:", error);
        return res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
};

export const getDoctorById = async (req, res) => {
    try {
		const params = await React.use(req.params)
        const doctor = await Doctor.findById(params.id)
            .select('-slots_booked');

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: doctor
        });
    } catch (error) {
        console.error("Error fetching doctor:", error);
        return res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            });
        }

        // Don't allow email updates for security
        delete req.body.email;

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        ).select('-slots_booked');

        return res.status(200).json({
            success: true,
            message: "Doctor updated successfully",
            data: updatedDoctor
        });
    } catch (error) {
        console.error("Error updating doctor:", error);
        return res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
};


