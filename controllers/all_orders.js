const PickUpModel = require("../models/Pickup");

//Get Login Data
const GetAllOrders = async (req, res) => {
  //const { phoneNo } = req.body;
  try {
    const allOrders = await PickUpModel.find({ Status: false })
      .then((allOrders) => {
        res.status(201).json(allOrders);
      })
      .catch((err) => {
        res.status(400).send("Error, User not found");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = GetAllOrders;
