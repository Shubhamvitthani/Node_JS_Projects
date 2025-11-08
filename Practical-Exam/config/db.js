const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://shubham:shubham123@cluster0.k198kt0.mongodb.net/PracticalExamDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(" Database Connected");
  } catch (error) {
    console.error(" Database Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
