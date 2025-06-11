import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import nodemailer from "nodemailer";
import {sendEmail} from "../configs/nodemailer.js";
import Token from "../Models/Token.js"
import crypto from "crypto"
import { generateVericationEmailHTML } from "../mail/emailhtml.js";

export const register = async (req, res) =>{
    const {first_name, last_name, email, password, date_of_birth, sex, postalCode,  healthCardNumber} = req.body;
    if(!first_name || !last_name || !email || !password || !date_of_birth || !sex || !postalCode || !healthCardNumber){

        return res.status(400).json({message: "All fields are required", success: false});
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({message: "Invalid email format", success:false});
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
        first_name,
        last_name,
        email,
        password: hashedPassword,
        date_of_birth,
        sex,
        postalCode,
        healthCardNumber
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

    const verifyToken = await new Token({
        userId: savedUser._id,
        token: crypto.randomBytes(32).toString("hex")
    }).save();

    const verificationUrl = `${process.env.BASE_URL}api/users/${savedUser._id}/verify/${verifyToken.token}`;
    const emailText = `Hello ${user.first_name} ${user.last_name},

    Welcome to HormoneFit! We are excited to have you on board. 

    Please click the link below to verify your account:
    ${verificationUrl}

    This link will expire in 24 hours.

    Best regards,
    The HormoneFit Team`;


    const emailHTML = generateVericationEmailHTML(savedUser.first_name, savedUser.last_name, verificationUrl);

    const emailResult = await sendEmail(
        savedUser.email,
        'Welcome to HormoneFit! Please verify your email',
        emailText,
        emailHTML
    )
    if(!emailResult.success){
        console.error("Failed to send verification email:", emailResult.message);
        return res.status(500).json({message: "Failed to send verification email", success: false});
    }


   return res.json({success: true, message: "User registered successfully, please check your email to verify your account."});
    }catch(error){
        console.error("Error during registration:", error);
        return res.status(500).json({message: "Internal server error " + error.message, success: false});
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
        res.clearCookie("token")
        return res.status(200).json({success: true, message: "Logged out successfully"});


    }catch(error){
        return res.json({success: false, message: error.message });
    }
}
export const forgotPassword = async(req, res) => {
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.json({success: false, message: "User not found"});
        }
        // generate reset token
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '15m'});
        
        // Send token to user's email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL,
                pass:process.env.PASSWORD_APP_EMAIL
            }
        })

;
    }catch(error){
        return res.status(500).json({success: false, message: "Internal server error: " + error.message});
    }
}

