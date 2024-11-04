const express = require("express");
const usercontroller = require("../../controllers/user-controller");
const { authValidator, validateIsAdminRequest } = require("../../middlewares/auth-validator");
const { validateEmail } = require("../../middlewares/signup-validator");

const router = express.Router();

router.post("/signup", authValidator, validateEmail, usercontroller.create);

router.post("/signin", authValidator, usercontroller.signin);

router.get('/isAuthenticated', usercontroller.isAuthenticated);

router.get("/isAdmin", validateIsAdminRequest, usercontroller.isAdmin);

module.exports = router;
