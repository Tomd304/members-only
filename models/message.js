var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const { DateTime } = require("luxon");

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

MessageSchema.virtual("created_formatted").get(function () {
  return DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Message", MessageSchema);
