const Users = require("../models/Users");

//User Sign Up
const UserSignUp = async (req, res) => {
  const {
    fullName,
    phoneNo,
    password,
    countryCode,
    location,
    altPhoneNo,
    description,
    reg_type,
  } = req.body;

  const isNewPhoneNo = await Users.phoneNoInUse(phoneNo);
  if (!isNewPhoneNo)
    return res.json({
      error: "PhoneNo",
      message: "*Phone Number already exist",
    });

  try {
    const User = await Users.create({
      Name: fullName,
      PhoneNo: phoneNo,
      Password: password,
      CountryCode: countryCode,
      Location: location,
      Reg_Type: reg_type,
    });

    res.status(201).json({
      name: User.Name,
      phoneNo: User.PhoneNo,
      countryCode: User.CountryCode,
      location: User.Location,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

module.exports = UserSignUp;
