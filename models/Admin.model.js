// Admin.model.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  adminId: String,
  nic: String,
  gender: String,
  email: String,
  phoneNumber: Number,
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin; // Export the Admin model as the default export
