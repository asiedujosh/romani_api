const PickUpModel = require("../models/Pickup");

//Get Login Data
const GetPersonalOrders = async (req, res) => {
  let PhoneNo = req.query.id;
  try {
    const pickup = await PickUpModel.find({ PhoneNo })
      .then((pickup) => {
        res.status(201).json(pickup);
      })
      .catch((err) => {
        res.status(400).send("Error, User not found");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = GetPersonalOrders;
