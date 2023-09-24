require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connect =() => {
    console.log("connected successfully");
    return mongoose.connect(uri);
};

module.exports = connect