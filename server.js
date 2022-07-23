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
  "mongodb+srv://node-authentication:test1234@cluster0.nvehq.mongodb.net/node-auth";

mongoose
  .connect(mongooseAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then((result) =>
    app.listen(5000, () => console.log("listening in port 5000"))
  )
  .catch((err) => console.log(err));

// routes

app.get("/", (req, res) => res.render("home"));
app.get("/protected", (req, res) => res.render("protected"));
app.use(authRoutes);
