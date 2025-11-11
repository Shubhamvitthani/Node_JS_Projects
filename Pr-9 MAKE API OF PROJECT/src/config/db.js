const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://shubham:shubham123@cluster0.k198kt0.mongodb.net/APIData",)
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

module.exports = dbConnection;
