const mongoose = require("mongoose");
const { Schema } = mongoose;

const transportSchema = new Schema({
  transportID: {
    type:String,
    unique:true,
  },
  vehicleType: String,
  ownerName: String,
  capacity: String,
  coverage: String,
  time: String,
  contactNo: String,
});

module.exports = transportManage = mongoose.model("transportManage", transportSchema);