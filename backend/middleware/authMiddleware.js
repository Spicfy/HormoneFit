const protect = async (req, res, next) => {
    try {
        // Check if user is logged in via session
        if (!req.session || !req.session.userId) {
            return res.status(401).json({
                success: false,
                message: "Please login to access this resource"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

export default protect;
