const mongoose = require("mongoose");

const User = mongoose.model("Student", new mongoose.Schema({
    email: String,
    password: String
}))

module.exports = Student