const express = require('express');
const v1Route = require('./v1/index');

const router = express.Router();

router.use('/v1', v1Route);

module.exports = router;