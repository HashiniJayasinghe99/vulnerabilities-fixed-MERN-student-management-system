const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema({
  fName: String,
  lName: String,
  staffId: String,
  nic: String,
  faculty: String,
  type: String,
  gender: String,
  email: String,
  phoneNumber: Number,
  password: String,
});

module.exports = Staff = mongoose.model("Staff", staffSchema);
