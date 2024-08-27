const UserService = require("../services/user-service");

const userService = new UserService();

const validateEmail = async (req, res, next) => {
  const emailExists = await userService.getUserByEmail(req.body.email);
  if (emailExists) {
    return res.status(400).json({
      message: "email already registered",
    });
  }
  next();
};

module.exports = {
    validateEmail
}
