var User = require("../models/user");
var bcrypt = require("bcryptjs");
var passport = require("passport");
exports.login_get = function (req, res, next) {
  res.render("login-form");
};

exports.login_post = function (req, res, next) {
  console.log("starting authentication");
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })(req, res, next);
};
