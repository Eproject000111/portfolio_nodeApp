const mongoose = require("mongoose");
const constant = require("./constant");

let isConnected = false; // global connection state

exports.connectDB = async () => {
  if (isConnected) {
    console.log("🟢 Using existing MongoDB connection");
    return;
  }

  try {
    const conn = await mongoose.connect(constant.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    isConnected = conn.connections[0].readyState;
    console.log("✅ MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};