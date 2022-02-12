var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  membershipStatus: { type: String, required: true },
});

UserSchema.virtual("fullName").get(() => {
  return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("User", UserSchema);
