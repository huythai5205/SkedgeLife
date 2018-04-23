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
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
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
