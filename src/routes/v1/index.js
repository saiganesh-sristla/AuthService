const express = require("express");
const usercontroller = require("../../controllers/user-controller");
const { authValidator } = require("../../middlewares/auth-validator");
const { validateEmail } = require("../../middlewares/signup-validator");

const router = express.Router();

router.post("/signup", authValidator, validateEmail, usercontroller.create);

router.post("/signin", authValidator, usercontroller.signin);

router.get('/isAuthenticated', usercontroller.isAuthenticated);
module.exports = router;
