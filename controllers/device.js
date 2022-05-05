const Device = require('../models/Device');

// @desc  Get all devices
// @route GET /api/v1/devices
// @access Public
exports.getDevices = async (req, res, next) => {
  try {
    const devices = await Device.find();

    return res.status(200).json({
      success: true,
      count: devices.length,
      data: devices
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Create a store
// @route POST /api/v1/devices
// @access Public
exports.addDevice = async (req, res, next) => {
  try {
    console.log('addDevice Start'.underline.blue)
    const device = await Device.create(req.body);

    return res.status(201).json({
      success: true,
      data: device
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This device already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};
