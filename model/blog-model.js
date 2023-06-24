const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { String, required: true },
  content: { String, required: true },
  tags: { Array, required: true },
  author: { String, required: true },
  date: { Date, default: Date.now },
  Comments: { Array, default: [] },
});
