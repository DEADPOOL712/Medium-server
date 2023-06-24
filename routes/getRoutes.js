const router = require("express").Router();
const users = require("../model/user-model");
const blogs = require("../model/blog-model");

// routes handler
router.get("/", (req, res) => {
  res.send("This is home page");
});

module.exports = router;
