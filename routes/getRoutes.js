const router = require("express").Router();
const users = require("../model/user-model");
const blogs = require("../model/blog-model");

// routes handler
router.get("/", (req, res) => {
  res.send("This is home page");
});

// fetch blogs based on tags
router.get("/tags", async (req, res) => {
  try {
    // get tags from client
    const { tag } = req.body; // tags : "movie" , ["css", "html"];
    // get blogs from database
    const blogsByTags = await blogs.find({ tags: { $in: tag } });
    if (!blogsByTags) {
      res.status(404).send("No blogs found!");
    }
    res.status(200).send(blogsByTags);
  } catch (err) {
    console.error("Error getting blogs", err);
    res.status(500).send("Internal server errror!");
  }
});

// fetch blogs based on author id (user_id)
router.get("/author", async (req, res) => {
  try {
    const { user_id } = req.body;
    // get blogs from database
    const blogsByAuthor = await blogs.find({ author: user_id }); // blogs will have author id field
    if (!blogsByAuthor) {
      res.status(404).send("No blogs found!");
    }
    res.status(200).send(blogsByAuthor);
  } catch (err) {
    console.error("Error getting blogs", err);
    res.status(500).send("Internal server errror!");
  }
});

// fetch random blogs based on size
router.get("/random", async (req, res) => {
  try {
    const size = 3;
    randomBlogs = await blogs.aggregate([{ $sample: { size: size } }]);
    if (!randomBlogs) {
      res.status(404).send("No blogs found!");
    }
    res.status(200).send(randomBlogs);
  } catch (err) {
    console.error("Error getting blogs", err);
    res.status(500).send("Internal server errror!");
  }
});

module.exports = router;
