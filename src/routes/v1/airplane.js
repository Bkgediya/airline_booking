const { AirplaneController } = require('../../controllers');

const router = require('express').Router();

router.post('/',AirplaneController.createAirplane);

module.exports = router;