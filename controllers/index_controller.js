var User = require("../models/user");
var Message = require("../models/message");

exports.index_get = async function (req, res, next) {
  const messages = await Message.find().populate("creator");
  res.render("index", { title: "Message Board", messages: messages });
};
