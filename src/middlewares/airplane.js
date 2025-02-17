const {StatusCodes} = require('http-status-codes');
const  {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const validateCreateRequest = (req,res,next) => {
    const { modelNumber } = req.body;
    if (!modelNumber) {
        ErrorResponse.message = "Somethign went wrong while creating airplane"
        ErrorResponse.error = new AppError(["Model number is not found in the oncoming request"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}