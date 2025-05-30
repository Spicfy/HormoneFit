import JWT from 'jsonwebtoken';

export const protect =async (req, res, next) => {
    try{
        const token = req.headers["authorization"].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(200).send({
                    success: false,
                    message: "Invalid token",
                })
            }
        })
    }catch(error){
        return res.status(500).send({
            success: false,
            message: "Server error",
        })
    }
}