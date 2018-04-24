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
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  seatsAvailable: Number,
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
