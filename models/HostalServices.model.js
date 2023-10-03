const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostalSchema = new Schema({
  hostalID: {
    type:String,
    unique:true,
  },
  hostalName: String,
  address: String,
  bedRooms: String,
  bathrooms: String,
  persons: String,
  charge: String,
  contactNo: String,
});

module.exports = hostalManage = mongoose.model("hostalManage", hostalSchema);