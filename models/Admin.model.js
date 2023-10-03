const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  fName: String,
  lName: String,
  adminId: String,
  nic: String,
  gender: String,
  email: String,
  phoneNumber: Number,
  password: String,
});

module.exports = Admin = mongoose.model("Admin", adminSchema);
