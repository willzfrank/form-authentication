const express = require("express");
const app = express();
const mongoose = require("mongoose");

// middleware

app.use(express.static("public"));

// view engine

app.set("view engine ", ejs);

// database connection
mongooseAddress = env.process.MONGODB_PASSWORD;

mongoose
  .connect(mongooseAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// routes

app.get("/", (req, res) => res.render("home"));
app.get("/protected", (req, res) => res.render("protected"));
