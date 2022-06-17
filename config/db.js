const mongoose = require('mongoose');

let conn = null;

exports.connectDB = async () => {
  try {
      conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.underline.green);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

exports.closeDB = async () => {
  try {
    conn.connection.close();
    console.log(`MongoDB Closed: ${conn.connection.host}`.underline.red);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// module.exports = connectDB;
