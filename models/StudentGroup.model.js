const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
  groupID: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  groupName: String,
  leaderITNum: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  leaderName: String,
  leaderEmail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  member1ITNum: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  member1Name: String,
  member2ITNum: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  member2Name: String,
  });

module.exports = StudentGroup = mongoose.model("StudentGroup", studentGroupSchema);