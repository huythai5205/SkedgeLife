const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  seatsAvailable: String,
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
