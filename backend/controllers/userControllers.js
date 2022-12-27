const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/genarateToken");
const userRegister = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  /*
  starting post req form
  res.json({
    name,
    email,
  });
*/

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(401);
    throw new Error("User Already Exists..");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User Not found");
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { userRegister, authUser };
