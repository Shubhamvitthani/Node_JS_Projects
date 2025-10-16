const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://shubham:shubham123@cluster0.k198kt0.mongodb.net/AdminData')

const db = mongoose.connection;

db.once("open", (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("Database Connected")
})

module.exports = db;