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

module.exports = {
    authValidator
}