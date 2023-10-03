const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  fName: String,
  lName: String,
  studentId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  nic: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  faculty: String,
  gender: String,
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  phoneNumber: Number,
  password: String,
});

module.exports = Student = mongoose.model("Student", studentSchema);
