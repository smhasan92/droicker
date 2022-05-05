const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    deviceId: {
      type: String,
      required: [true, 'Please add a store ID'],
      unique: true,
      trim: true
    },
    Name: {
      type: String,
      required: [true, 'Name is required']
    },
    Alias : {
        type: String
    },
    User : {
        type: String
    },
    location: {
      type: {
        type: String,
        enum: ['Point']
      },
      coordinates: {
        type: [Number],
        index: '2dsphere'
      },
      formattedAddress: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
   })//, { collection: 'Device' });
  
  // Geocode & create location
//   StoreSchema.pre('save', async function(next) {
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//       type: 'Point',
//       coordinates: [loc[0].longitude, loc[0].latitude],
//       formattedAddress: loc[0].formattedAddress
//     };
  
////     Do not save address
//     this.address = undefined;
//     next();
//   });
  
  module.exports = mongoose.model('Device', DeviceSchema);
  