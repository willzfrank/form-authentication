const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum length is 6 characters"],
  },
});

// before saving to database--hashing password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt;
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", "UserSchema");
module.exports = User;
