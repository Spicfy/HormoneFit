import nodemailer from "nodemailer";

// Create a transporter for SMTP
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file




   export const sendEmail = async (to, subject, text, html=null) => {
      const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
    try{
      const mailOptions = {
        from:process.env.SENDER_EMAIL,
        to:to,
        subject: subject,
        text: text,
        ...(html && {html: html})
      };

      const result = await transporter.sendMail(mailOptions);
      console.log("Email sent:", result.response);

      return { success: true, message: "Email sent successfully" };
    }catch(error){
      console.error("Error creating email options:", error);
      throw error;
    }
   }






