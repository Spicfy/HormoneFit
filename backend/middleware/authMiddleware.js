import JWT from 'jsonwebtoken';
    const protect = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message: 'Not Authorized'});
    }

    try{
        const tokenDecode = JWT.verify(token, process.env.JWT_SECRET)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({success: false, message: 'Not Authorized. Invalid token.'});
        }
        next();
    }catch(error){
        console.error("Error in userAuth middleware:", error);
        return res.status(500).json({success: false, message: 'Internal server error'});
    }
}

export default protect;