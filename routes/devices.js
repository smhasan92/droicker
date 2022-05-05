const express = require('express');
const { getDevices, addDevice } = require('../controllers/device');

const router = express.Router();

router
  .route('/')
  .get(getDevices)
  .post(addDevice);

module.exports = router;
