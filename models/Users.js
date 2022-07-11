const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const Users = new Schema({
  Name: {
    type: String,
    required: [true, "Please enter a full Name"],
  },
  PhoneNo: {
    type: String,
    required: [true, "Please enter a Phone Number"],
  },
  Password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  CountryCode: {
    type: String,
    required: [true, "Please enter an country Code"],
  },
  Location: {
    type: String,
    required: [true, "Please enter a location"],
  },
  Reg_Type: {
    type: String,
  },
});

Users.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

Users.statics.login = async function (PhoneNo, Password) {
  const user = await this.findOne({ PhoneNo });
  if (user) {
    const auth = await bcrypt.compare(Password, user.Password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Incorrect PhoneNo");
};

Users.statics.phoneNoInUse = async function (phoneNo) {
  try {
    const user = await this.findOne({ PhoneNo: phoneNo });
    if (user) return false;
    return true;
  } catch (err) {
    console.log("There was an error checking for phoneNo", err.message);
    return false;
  }
};

const UsersModel = mongoose.model("UsersModel", Users);
module.exports = UsersModel;
