const mongoose = require("mongoose");
const { Schema } = mongoose;

const noticeSchema = new Schema({
  date: String,
  topic: String,
  faculty: String,
  message: String,
});

module.exports = Notice = mongoose.model("Notice", noticeSchema);
