const express = require('express');
const { create } = require('../../controllers/user-controller');

const router = express.Router();

router.post('/signup', create);

module.exports = router;