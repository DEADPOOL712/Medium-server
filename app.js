require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./model/user-model");
const blogs = require("./model/blog-model");
const getRouter = require("./routes/getRoutes");
const postRouter = require("./routes/postRoutes");

// routes handler
app.use("/", getRouter);
app.use("/", postRouter);

// connect to database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to database !");
  })
  .catch((err) => {
    console.log("Connection failed !\n", err);
  });

// starting server on PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is live on PORT :", PORT);
  console.log("http://localhost:8080");
});
