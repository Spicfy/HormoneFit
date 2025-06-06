import Doctor from '../Models/Doctor.js'

//API for adding doctor

const addDoctor = async(req, res) => {
    try{

        const {first_name,last_name, email, phone, specialization, experience, fees, address} = req.body;
    }catch(error){
        res.json({success:false, message: error.message});
    }
}

ex