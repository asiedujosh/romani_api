const PickUpModel = require("../models/Pickup");
const Drop_offModel = require("../models/Drop_off");

//User Sign Up
const Drop_off = async (req, res) => {
  //let orderId = `#${Math.floor(Math.random() * 1000000000000)}`;
  const { orderId, deliveredBy, phoneNo, endDate, orderDate } = req.body;

  let drop_off = {
    OrderId: orderId,
    DeliveredBy: deliveredBy,
    PhoneNo: phoneNo,
  };

  let NewData = {
    Start: true,
    StartTime: orderDate,
    End: true,
    EndTime: endDate,
  };

  try {
    const Pickup_Activity_update = await PickUpModel.findOneAndUpdate(
      { OrderId: orderId },
      { NewData },
      {
        new: true,
      }
    );
    const Drop_off = await Drop_offModel.create(drop_off);
    res.status(201).json(Drop_off);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

module.exports = Drop_off;
