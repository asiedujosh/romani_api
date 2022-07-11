const PickUpModel = require("../models/Pickup");

const Pickup_requests = async (req, res) => {
  //let orderId = `#${Math.floor(Math.random() * 1000000000000)}`;
  try {
    const Pickup_Activity_update = await PickUpModel.find({});
    res.status(201).json(Pickup_Activity_update);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

module.exports = Pickup_requests;
