const config = require("config");
const mongoose = require("mongoose");
async function connectDB() {
  try {
    const db = config.get("mongoUri");
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB connected...");
  } catch (error) {
    console.log("MongoDB not connected!!");
  }
}

module.exports = connectDB;
