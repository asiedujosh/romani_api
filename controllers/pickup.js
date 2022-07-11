const PickUpModel = require("../models/Pickup");

//User Sign Up
const PickUp = async (req, res) => {
  let orderId = `#${Math.floor(Math.random() * 1000000000000)}`;
  const {
    orderBy,
    itemName,
    phoneNo,
    altPhoneNo,
    pickupLocation,
    dropOffLocation,
    description,
    orderDate,
  } = req.body;

  let newPickUp_Activity = {
    Start: false,
    StartTime: null,
    End: false,
    EndTime: null,
  };

  let newPickUpInfo = {
    OrderId: orderId,
    OrderMadeBy: orderBy,
    ItemName: itemName,
    PhoneNo: phoneNo,
    AltPhoneNo: altPhoneNo,
    PickupDestination: pickupLocation,
    DropOffDestination: dropOffLocation,
    Description: description,
    PickUpDate: orderDate,
    Status: false,
    Pickup_activity: newPickUp_Activity,
  };

  const isOrderIdAvailable = await PickUpModel.OrderIdAvailability(orderId);
  if (!isOrderIdAvailable)
    return res.json({
      error: "Pickup",
      message: "There was a problem, please try again",
    });

  try {
    const Pickup = await PickUpModel.create(newPickUpInfo);
    res.status(201).json(Pickup);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

module.exports = PickUp;
