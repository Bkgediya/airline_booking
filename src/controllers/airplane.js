const { StatusCodes } = require('http-status-codes');
const  {AirplaneService} = require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common')
 
const createAirplane = async (req,res) => {
    try {
       const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity : req.body.capacity
       })
       SuccessResponse.data = airplane;
       SuccessResponse.message = 'Successfully create an airplane';

       return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating airplane"
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createAirplane
}