const mongoose = require("mongoose");
const { Schema } = mongoose;

const markingSchema = new Schema({
  markingNumber:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  }, 
  answer1: String,
  marking1: String,
  answer2: String,
  marking2: String,
  answer3: String,
  marking3: String,
  answer4: String,
  marking4: String,
  answer5: String,
  marking5: String,
  answer6: String,
  marking6: String,
  answer7: String,
  marking7: String,
  answer8: String,
  marking8: String,
  answer9: String,
  marking9: String,
  answer10: String,
  marking10: String,
  date: String,
  moduleN: String,
  Lecture: String,
  other: String,
});

module.exports = Marking = mongoose.model("Marking", markingSchema);