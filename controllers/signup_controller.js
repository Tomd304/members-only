var User = require("../models/user");
var bcrypt = require("bcryptjs");
exports.signup_get = function (req, res, next) {
  res.render("signup-form");
};

exports.signup_post = async function (req, res, next) {
  const user = await User.findOne({ username: req.body.username });
  console.log("signing up");
  if (!user) {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: hashedPassword,
        membershipStatus: "free",
      });
      console.log(newUser);
      newUser.save();
    });
  }
  res.redirect("/");
};
