import Doctor from '../Models/Doctor.js'
import User from '../Models/User.js';
import validator from 'validator';
import bcrypt from 'bcrypt';



//API for adding doctor

export const addDoctor = async(req, res) => {
    try{

        const {first_name,last_name, email,password, phone, specialization,date_of_birth, experience, fees, address} = req.body;
        const imageFile = req.file;

      

        if(!first_name || !last_name || !email || !password || !phone || !specialization || !date_of_birth){
            return res.status(400).json({success: false, message: "All required fields are required"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Invalid email format"});
        }

        const doctorExists = await Doctor.findOne({ email});

        if(doctorExists){
            return res.status(400).json({success: false, message: "Doctor already exists with this email"});
        }


        if(password.length < 6){
            return res.status(400).json({success: false, message: "Password must be at least 6 characters long"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const doctor = new Doctor({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            specialization,
            phone,
            date_of_birth: new Date(date_of_birth), 
            professional_photo: imageFile ? imageFile.path : null,
        })
        if(address) doctor.address = address;
        if(fees) doctor.fees = fees;
        if(experience) doctor.experience = experience;

        const savedDoctor = await doctor.save();
        res.json({success: true, message: "Doctor added successfully"})


    }catch(error){
        res.json({success:false, message: error.message});
    }
}
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        if(!users || users.length === 0){
            return res.json({success: false, message: "No users found"});
        }
        res.json({success: true, users});

    } catch (error) {
        
        res.json({success: false, message: error.message});
    }
}

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().select('-password');
        if(!doctors || doctors.length === 0){
            return res.json({success: false, message: "No doctors found"});
        }
        res.json({success: true, doctors});

    } catch (error) {
        
        res.json({success: false, message: error.message});
    }
}

export const deleteDoctor = async (req, res) => {
    try{
        const {doctorId} = req.body;
        if(!doctorId){
            return res.status(400).json({success: false, message: "Doctor ID is required"});
        } 
        const doctor = await Doctor.findById(doctorId);
        if(!doctor){
            return res.status(404).json({success:false, message: "Doctor not found"});
        }
        await Doctor.findByIdAndDelete(doctorId);
        res.json({success: true, message: "Doctor deleted successfully"});
    }catch(error){
        res.json({success: false, message: error.message});
    }
}
