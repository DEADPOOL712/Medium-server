const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true },
  password: { type: String, required: true },
  userpicture: { type: String, default: "" },
  following: { type: Array, default: [] },
  followers: { type: Array, default: [] },
  blogs: { type: Array, default: [] },
  date: { type: Date, default: Date.now },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
