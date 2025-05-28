import express from "express";
import cors from "cors" //to enable CORS for the backend server
import connectDB from './configs/db.js';
import 'dotenv/config'; //to load environment variables from .env file


dotenv.config(); //load environment variables from .env file
const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(cors()); //enable communication between frontend and backend
app.get('/', (req, res) => {
    res.send('Hello, World');
})
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})      