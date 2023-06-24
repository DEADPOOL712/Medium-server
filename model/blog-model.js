const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { String, required: true },
  content: { String, required: true },
  tags: { Array, required: true },
  author: { String, required: true },
  date: { Date, default: Date.now },
  comments: { Array, default: [] },
  likes: { Number, default: 0 },
});
