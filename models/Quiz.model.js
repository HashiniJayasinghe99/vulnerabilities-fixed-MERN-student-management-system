const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  quizNumber:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  }, 
  quiz1: String,
  quiz2: String,
  quiz3: String,
  quiz4: String,
  quiz5: String,
  quiz6: String,
  quiz7: String,
  quiz8: String,
  quiz9: String,
  quiz10: String,
  date: String,
  moduleN: String,
  Lecture: String,
  other: String,
});

module.exports = Quiz = mongoose.model("Quiz", quizSchema);