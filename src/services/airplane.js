const  {AirplaneRepository} = require('../repositories');
const  {logger} = require('../config');

const airplaneRepository = new AirplaneRepository();

const createAirplane = async(data) => {
    try {
        const airplane =  await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        logger.error("Something went wrong in the Airplane Service :  createAirplane")
        throw error;
    }
}

module.exports = {
    createAirplane
}