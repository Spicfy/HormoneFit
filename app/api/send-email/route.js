import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.to || !body.subject || !body.meetingDetails) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { to, subject, meetingDetails } = body;

    // Create email HTML content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Meeting Confirmation</h2>
        <p>Hello ${meetingDetails.name},</p>
        <p>Your meeting has been scheduled successfully!</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Meeting Details:</h3>
          <p><strong>Date:</strong> ${meetingDetails.date}</p>
          <p><strong>Time:</strong> ${meetingDetails.time}</p>
        </div>
        <p>You can add this meeting to your calendar using the attached calendar invitation.</p>
        <p>If you need to make any changes to this meeting, please contact us.</p>
        <p>Best regards,<br>Your Team</p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Your Team" <noreply@yourapp.com>',
      to,
      subject,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
