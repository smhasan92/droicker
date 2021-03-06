const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middleware/error')

const db = require('./config/db');
var colors = require('colors');
// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
db.connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes for device
app.use('/api/v1/device', require('./routes/devices'));
// Routes for location
app.use('/api/v1/location', require('./routes/location'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
