import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Doctor from '../Models/Doctor.js'; // Adjust path
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt';
dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
const run = async () => {
          await mongoose.connect(`${process.env.MONGODB_URI}/Lola`)

  const hashedPassword = await bcrypt.hash('YourPassword123', 10); // 10 is the salt rounds
  const CALENDLY_USER_INFO = {
    "avatar_url": null,
    "created_at": "2021-04-16T02:44:53.810800Z",
    "current_organization": "https://api.calendly.com/organizations/DEGBSVPHE77WGXTX",
    "email": "bruceziwang@gmail.com",
    "locale": "en",
    "name": "SpicfY",
    "resource_type": "User",
    "scheduling_url": "https://calendly.com/bruceziwang",
    "slug": "bruceziwang",
    "time_notation": "24h",
    "timezone": "America/New_York",
    "updated_at": "2025-06-02T17:04:06.018578Z",
    "uri": "https://api.calendly.com/users/AFDAXTOEGUH2CPXK"
};


  const newDoctor = new Doctor({
    first_name: 'bruce',
    last_name: 'wang',
    email: 'bruceziwang@gmail.com',
    password: hashedPassword,
    date_of_birth: new Date('1980-05-15'),
    specialty: 'Cardiology',
    phone: '+1234567890',
    available: true,
    calendly_user_uri:  CALENDLY_USER_INFO.uri,
    calendly_access_token: process.env.CALENDLY_ACCESS_TOKEN,
  });

  await newDoctor.save();
  console.log('Doctor inserted');
  mongoose.disconnect();
};

run();
