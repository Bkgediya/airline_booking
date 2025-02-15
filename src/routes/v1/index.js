const express = require('express');
const router = express.Router();

const airplaneRoutes = require('./airplane')

router.use('/airplane',airplaneRoutes)
module.exports = router;