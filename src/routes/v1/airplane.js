const { AirplaneController } = require('../../controllers');
const { AirplaneValidation } = require('../../middlewares');

const router = require('express').Router();

router.post('/',AirplaneValidation.validateCreateRequest, AirplaneController.createAirplane);

module.exports = router;