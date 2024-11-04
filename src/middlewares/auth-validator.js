const authValidator = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        return res.status(500).json({
            message:"Email and password is required",
            success:false,
        })
    }
    next();
}

const validateIsAdminRequest = async (req, res, next) => {
    if(!req.body.id){
        return res.status(500).json({
            message:"please provide the user id",
            success:false,
        })
    }
    next();
}

module.exports = {
    authValidator,
    validateIsAdminRequest
}