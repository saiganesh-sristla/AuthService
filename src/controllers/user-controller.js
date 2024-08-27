const { sign } = require("jsonwebtoken");
const UserService = require("../services/user-service");

const userService = new UserService();

async function create(req, res) {
  try {
    const user = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      message: "Succesfully created user",
      success: true,
      data: user,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      success: false,
      data: {},
      err: error,
    });
  }
}

async function signin(req, res) {
  try {
    const token = userService.createToken({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({
      message: "Succesfully logged in",
      success: true,
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      success: false,
      data: {},
      err: error,
    });
  }
}

module.exports = {
  create,
  signin,
};
