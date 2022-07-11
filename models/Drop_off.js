const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drop = new Schema({
  OrderId: {
    type: String,
  },
  DeliveredBy: {
    type: String,
  },
  PhoneNo: {
    type: String,
  },
});

const DropModel = mongoose.model("DropModel", Drop);
module.exports = DropModel;
