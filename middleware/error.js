const ErrorResponse = require("../utils/errorHandler");

const errorHandler = (err,req,res,next) => {
    console.log(err.stack.red);

    let error = {... err};

    //Mongoose duplicate
    if(err.name == 'CastError') {
        const message = 'Duplicate field entered';
        error = new ErrorResponse(message,400);
    }

    //Mongoose validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message,400);
    }

    res.status(error.statusCode || 500).json({
        success : false,
        error: error.message || 'Server  error'
    });
};

module.exports = errorHandler;