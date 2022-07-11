const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pickup_activity = new Schema({
  orderId: {
    type: String,
  },
  Start: {
    type: String,
  },
  StartTime: {
    type: String,
  },
  End: {
    type: String,
  },
  EndTime: {
    type: String,
  },
});

const Pickup_activityModel = mongoose.model(
  "Pickup_activityModel",
  Pickup_activity
);
module.exports = Pickup_activityModel;
