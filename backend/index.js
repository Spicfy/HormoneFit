import express from "express";
import cors from 'cors' //to enable CORS for the backend server
import connectDB from './configs/db.js';
import 'dotenv/config'; //to load environment variables from .env file
import authRoutes from './routes/authRoutes.js'; //importing auth routes
import userRoutes from './routes/userRoutes.js'; //importing user routes
import doctorRoutes from './routes/doctorRoutes.js'; //importing doctor routes

connectDB();
 //connect to cloudinary for image uploads
//load environment variables from .env file
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true
}));




const PORT = process.env.PORT || 4000;

//API endpoints for testing
app.get('/', (req, res) => {
    console.log("API is working");
    res.send('Hello, World');
})
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes);
app.use('/api/doctor', doctorRoutes);


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    console.log()

})