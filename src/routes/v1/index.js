const express = require("express");
const usercontroller = require("../../controllers/user-controller");
const { authValidator } = require("../../middlewares/auth-validator");

const router = express.Router();

router.post("/signup", authValidator, usercontroller.create);

router.post("/signin", authValidator, usercontroller.signin);
module.exports = router;
