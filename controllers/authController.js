const User = require("../model/User");

const handleErrors = (err) => {
  // this are the objects that gets updated
  let errors = { email: "", password: "" };

  // err.code = 11000
  if (err.code === 11000) {
    errors.email = "Email has already been used";
    return errors;
    // why am returning here 'cus there aint need to move on to the next task it just ends here '
  }

  // based on the console log response of err.message they both include user validation failed
  if (err.message.include("user validation failed")) {
    // we have more than one values and we need to check for both password and email so we need to cycle through to get it

    Object.values(err.errors).forEach(({ properties }) => {
      // for each error we get the properties which can be found by console.log("error.properties")
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    // call the handle error function and pass the error object as argument
    const errors = handleErrors(err);
    // created the errors varable so it can be sent back to the client
    res.status(400).json(errors);
  }

  res.render("signup post");
};

module.exports.login_get = (req, res) => {
  res.render("login get");
};

module.exports.login_post = async (req, res) => {
  const { password, email } = req.body;

  res.render("login post");
};
