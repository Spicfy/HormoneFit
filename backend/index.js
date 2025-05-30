import express from "express";
import cors from 'cors' //to enable CORS for the backend server
import connectDB from './configs/db.js';
import 'dotenv/config'; //to load environment variables from .env file
import authRoutes from './routes/authRoutes.js'; //importing auth routes
import connectCloudinary from "./configs/cloudinary.js";


connectDB();
connectCloudinary(); //connect to cloudinary for image uploads
//load environment variables from .env file
const app = express();

app.use(express.json());
app.use(cors())



const PORT = process.env.PORT || 5000;

//API endpoints for testing
app.get('/', (req, res) => {
    res.send('Hello, World');
})
app.use('/api/auth', authRoutes)
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    console.log()

})      