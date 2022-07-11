const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pickup_activity = new Schema({
  Start: {
    type: Boolean,
  },
  StartTime: {
    type: String,
  },
  End: {
    type: Boolean,
  },
  EndTime: {
    type: String,
  },
});

const Pickup = new Schema({
  OrderId: {
    type: String,
  },
  OrderMadeBy: {
    type: String,
  },
  ItemName: {
    type: String,
  },
  PhoneNo: {
    type: String,
  },
  AltPhoneNo: {
    type: String,
  },
  PickupDestination: {
    type: String,
  },
  DropOffDestination: {
    type: String,
  },
  Description: {
    type: String,
  },
  PickUpDate: {
    type: String,
  },
  Status: {
    type: Boolean,
  },
  Pickup_activity: Pickup_activity,
});

Pickup.statics.OrderIdAvailability = async function (OrderId) {
  try {
    const order = await this.findOne({ OrderId: OrderId });
    if (order) return false;
    return true;
  } catch (err) {
    console.log("There was an error checking for Orders", err.message);
    return false;
  }
};

const PickupModel = mongoose.model("PickupModel", Pickup);
module.exports = PickupModel;
