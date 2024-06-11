const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  transactions: [{ type: String, amount: Number, date: { type: Date, default: Date.now }, type: { type: String, enum: ['entrada', 'saida'] } }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
