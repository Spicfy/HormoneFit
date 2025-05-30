import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    _id: {
        type: String, required: true
    },
    medical_license_number: {
        type: String, required: true, unique: true
    },
    first_name: {
        type: String, required: true
    },
    last_name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    profile_picture: {
        type: String
    },
    professional_photo: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String, required: true
    },
    specialty: {
        type: String, required: true
    },
    education: [{
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        year_graduated: { type: Number, required: true },
        certification: { type: String }
    }],
    years_of_experience: {
        type: Number
    },
    office_hours: {
        monday: { start: String, end: String },
        tuesday: { start: String, end: String },
        wednesday: { start: String, end: String },
        thursday: { start: String, end: String },
        friday: { start: String, end: String },
        saturday: { start: String, end: String },
        sunday: { start: String, end: String }
    },
    consultation_fee: {
        type: Number
    },
    bio: {
        type: String
    },
    languages_spoken: [{
        type: String
    }],
    is_verified: {
        type: Boolean, default: false
    }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor; 