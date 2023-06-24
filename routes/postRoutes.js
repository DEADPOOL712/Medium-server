const router = require("express").Router();
const users = require("../model/user-model");
const blogs = require("../model/blog-model");

// routes handler
router.post("/", (req, res) => {
  res.send("Home post req");
});

module.exports = router;
