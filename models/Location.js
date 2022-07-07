const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required : [true, 'Device Id is required']
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
            required : [true, 'Location Coordinates are required']
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Location', LocationSchema);