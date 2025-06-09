import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
// Create a transporter for SMTP


const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const token = jwt.sign({
    data: 'Token data' ,
}   , 'ourSecretKey', {expiresIn: '10m'}
);

export default transporter;