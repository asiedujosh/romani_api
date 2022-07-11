const Users = require("../models/Users");

//Get Login Data
const GetUser = async (req, res) => {
  //const { phoneNo } = req.body;
  let PhoneNo = req.query.id;
  try {
    const user = await Users.findOne({ PhoneNo })
      .then((user) => {
        res.status(201).json({
          name: user.Name,
          phoneNo: user.PhoneNo,
          countryCode: user.CountryCode,
          location: user.Location,
          altPhoneNo: user.AltPhoneNo,
          description: user.Description,
        });
      })
      .catch((err) => {
        res.status(400).send("Error, User not found");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = GetUser;
