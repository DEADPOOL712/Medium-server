const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: Array, required: true },
  author: { type: String, required: true },
  date: { type:Date, default: Date.now },
  Comments: { type:Array, default: [] },
});

const blogs = mongoose.model("blogs", blogSchema);

module.exports = blogs;
