import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    token: {
        type: String,
        required:true
    }
}, {timestamps: true})

const Token = mongoose.model("Token", TokenSchema)
export default Token;