const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
// middleware

app.use(express.static("public"));
app.use(express.json());

// view engine

app.set("view engine ", "ejs");

// database connection
mongooseAddress =
  "mongodb+srv://tutorialClusters:tutorialClusters1234567890@tutorialclusters.nvehq.mongodb.net/";

mongoose
  .connect(mongooseAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// routes

app.get("/", (req, res) => res.render("home"));
app.get("/protected", (req, res) => res.render("protected"));
app.use(authRoutes);
