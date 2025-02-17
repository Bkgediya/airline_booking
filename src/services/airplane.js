const  {AirplaneRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const  {logger} = require('../config');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

const createAirplane = async(data) => {
    try {
        const airplane =  await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        logger.error("Something went wrong in the Airplane Service :  createAirplane")
        throw new AppError('Cannot create new airplane object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirplane
}