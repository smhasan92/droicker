const ErrorResponse = require('../utils/errorHandler');
const Location = require('../models/Location');


// @desc  Get all devices
// @route GET /api/v1/devices
// @access Public
exports.getLocation = async (req, res, next) => {
  try {
    console.log("Call Start : getLocation".underline.blue)
    const location = await Location.find();
    console.log("Call End : getLocation".underline.blue)
    return res.status(200).json({
      success: true,
      count: location.length,
      data: location
    });
  } catch (err) {
    next(new ErrorResponse(err.message,404));
  }
};

// @desc  Create a store
// @route POST /api/v1/devices
// @access Public
exports.addLocation = async (req, res, next) => {
  try {
    console.log('addLocation Start'.underline.blue)
    const location = await Location.create(req.body);
    console.log('addLocation End'.underline.blue)
    return res.status(201).json({
      success: true,
      data: location
    });
  } catch (err) {
    console.error(`${err}`.red);
    if (err.code === 11000) {
      next(new ErrorResponse('This location already exists',400));
    }
    next(new ErrorResponse('Server error',505));
  }
};
