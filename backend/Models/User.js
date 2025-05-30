import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {
        type: String, required: true},
    first_name: {
        type: String, required:true
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
        type: String,
    },
    role: {type: String, enum: ['user', 'doctor'], default: 'user'},
    address: {
        type: String,

    }
}, {timestamps: true})
