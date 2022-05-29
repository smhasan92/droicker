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
    console.error(err);
    res.status(500).json({ error: 'Server error' });
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
      return res.status(400).json({ error: 'This location already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};
