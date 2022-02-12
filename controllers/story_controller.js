var Message = require("../models/message");
exports.story_get = function (req, res, next) {
  if (!req.user) {
    res.redirect("/");
  } else {
    res.render("story-form");
  }
};

exports.story_post = async function (req, res, next) {
  if (!req.user) {
    res.redirect("/");
  }
  const newMessage = new Message({
    title: req.body.title,
    message: req.body.message,
    creator: req.user._id,
  });
  await newMessage.save();
  res.redirect("/");
};
