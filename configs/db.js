const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/urlShort"

const connect =() => {
    console.log("connected successfully");
    return mongoose.connect(uri);
};

module.exports = connect