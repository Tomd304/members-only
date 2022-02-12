var User = require("../models/user");
var bcrypt = require("bcryptjs");
exports.signup_get = function (req, res, next) {
  res.render("signup-form");
};

exports.signup_post = async function (req, res, next) {
  const user = await User.findOne({ userName: req.body.username });
  if (!user) {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      const newUser = new User({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        userName: req.body.username,
        password: hashedPassword,
        membershipStatus: "free",
      });
      newUser.save();
    });
  }
  res.redirect("/");
};
