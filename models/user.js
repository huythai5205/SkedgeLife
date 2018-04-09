const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  socialURL: String,
  classesTeaching: {
    type: Schema.Types.ObjectId,
    ref: "Class"
  },
  classesTaking: {
    type: Schema.Types.ObjectId,
    ref: "Class"
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
