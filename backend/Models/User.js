import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: {
        type: String, required: true
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
    address: {
        type: String
    },
    phone: {
        type: String
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String, enum: ['male', 'female', 'other'],
        required: true

    },
    emergency_contact: {
        name: { type: String },
        phone: { type: String },
        relationship: { type: String }
    },
    medical_history: [{
        condition: String,
        date_diagnosed: Date,
        notes: String
    }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User; 