import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    _id: {
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
        type: String // need to add default for profile picture
    },
    address: {
        type: String,
        required: true
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


const User = mongoose.model("User", UserSchema);
export default User;
