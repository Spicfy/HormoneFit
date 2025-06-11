import Doctor from '../Models/Doctor.js'
import validator from 'validator';
import bcrypt from 'bcrypt';


//API for adding doctor

export const addDoctor = async(req, res) => {
    try{

        const {first_name,last_name, email,password, phone, specialization,date_of_birth, experience, fees, address} = req.body;
        const imageFile = req.file;

        console.log({first_name,last_name, email, phone, specialization, date_of_birth, experience, fees, address}, imageFile);

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

}

