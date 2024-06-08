const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
    location: String
});

module.exports = User;