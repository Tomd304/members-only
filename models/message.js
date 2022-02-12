var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
