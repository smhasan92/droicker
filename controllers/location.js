const ErrorResponse = require('../utils/errorHandler');
const asyncHandler = require('../middleware/async');
const Location = require('../models/Location');


// @desc  Get all devices
// @route GET /api/v1/devices
// @access Public
exports.getLocation = asyncHandler(async (req, res, next) => {
  console.log("Call Start : getLocation".underline.blue)
  const location = await Location.find();
  console.log("Call End : getLocation".underline.blue)

  return res.status(200).json({
    success: true,
    count: location.length,
    data: location
  });
});

// @desc  Create a store
// @route POST /api/v1/devices
// @access Public
exports.addLocation = asyncHandler(async (req, res, next) => {
  console.log('addLocation Start'.underline.blue)
  const location = await Location.create(req.body);
  console.log('addLocation End'.underline.blue)
  return res.status(201).json({
    success: true,
    data: location
  });
});
