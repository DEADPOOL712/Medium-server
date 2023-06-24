const router = require("express").Router();
const users = require("../model/user-model");
const blogs = require("../model/blog-model");

// routes handler
router.post("/", (req, res) => {
  res.send("Home post req");
});
// published blogs
router.post("/publish", async (req, res) => {
  try {
    // get blog data from client
    const { title, content, tags, author } = req.body;
    // saveing blog to database
    const blog = new blogs({
      title: title,
      content: content,
      tags: tags,
      author: author,
    });
    await blog.save();
    res.status(200).send("Blog published successfully!");
  } catch (err) {
    console.error("Error publishing blog", err);
    res.status(500).send("Internal server errror!");
  }
});

// deleting blogs by id
router.post("/delete", async (req, res) => {
  try {
    //below line will change in future
    const { id } = req.body;
    // deleting blog from database
    const deletedBlog = await blogs.findByIdAndDelete(id);
    if (!deletedBlog) {
      res.status(404).send("Blog not found!");
    }
    res.status(200).send("Blog deleted successfully!");
  } catch (err) {
    console.error("Error deleting blog", err);
    res.status(500).send("Internal server errror!");
  }
});

module.exports = router;
