const Users = require("../models/Users");

//Get Login Data
const UserSignIn = async (req, res) => {
  console.log(req.body);
  const { phoneNo, password } = req.body;
  let PhoneNo = phoneNo;
  let Password = password;

  try {
    const user = await Users.login(PhoneNo, Password);
    if (user) {
      res.status(201).json({
        name: user.Name,
        phoneNo: user.PhoneNo,
        countryCode: user.CountryCode,
        location: user.Location,
        altPhoneNo: user.AltPhoneNo,
        description: user.Description,
        reg_type: user.Reg_Type,
      });
    }
  } catch (err) {
    res.status(400).send("Error, User not found");
  }
};

module.exports = UserSignIn;
