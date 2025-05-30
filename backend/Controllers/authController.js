import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


export const register = async (req, res) =>{
    const {first_name, last_name, email, password, date_of_birth, gender} = req.body;
    if(!first_name || !last_name || !email || !password || !date_of_birth || !gender){

        return res.status(400).json({message: "All fields are required", success: false});
    }
    try{
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message: "User already exists", success: false});
        }
    
    if(password.length < 6){
        return res.json({message: "Password must be at least 6 characters", success: false});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name,
        last_name,
        email,
        password: hashedPassword,
        date_of_birth,
        gender
    });
    const savedUser = await user.save();

    const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
   /*JWT token  
httpOnly: true: makes cookie inaccessible to javascript running in browser
secure: ensures cookie is sent only over HTTPS in production
   
   
   */
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: process.env.NODE_ENV === 'production'? 'none': 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })
    return res.json({success:true});
    }catch(error){
        console.error("Error during registration:", error);
        return res.status(500).json({message: "Internal server error idiot", success: false});
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.json({success: false, message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success: false, message: "Invalid credentials"});
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
       
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production'? 'none': 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        return res.json({success: true});
    }catch(error){
        return res.json({success: false, message: error.message})
    }
}
export const logout = async (req, res)=> {
    try{
        res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: process.env.NODE_ENV === 'production'? 'none': 'strict',
        });
        return res.json({success: true, message: "Logged out successfully"});


    }catch(error){
        return res.json({success: false, message: error.message });
    }
}


