import mongoose from "mongoose";
import { unique } from "next/dist/build/utils.js";

const doctorSchema = new mongoose.Schema({

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
    date_of_birth: {
        type: Date, required: true
    },
    specialty: {
        type: String, required: true
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
    doctor_fee: {
        type: Number
    },
    years_of_experience: {
        type: Number
    },
    
    available: {
        type: Boolean, default: true
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
    },
    slots_booked: {
        type:Object, default:{}
    },
    reviews: [{
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        rating: {type: Number, required: true},

    }],
} , { timestamps: true }, {minimize: false});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor; 