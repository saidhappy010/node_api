const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//Import Routes
const postsRoute = require("./routes/posts");
app.use(bodyParser.json());
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

// Connect To BD
mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((err) =>
    console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err)
  );
// START THE SERVER
app.listen(3000);
