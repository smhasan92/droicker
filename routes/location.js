const express = require('express');
const { getLocation, addLocation } = require('../controllers/location');

const router = express.Router();

router
  .route('/')
  .get(getLocation)
  .post(addLocation);

module.exports = router;
