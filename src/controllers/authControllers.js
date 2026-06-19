const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/gtokens");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });

  if (exists)
    return res.status(400).json({
      message: "Email already exists"
    });

  const hashed = await bcrypt.hash(
    password,
    10
  );

  const user = await User.create({
    name,
    email,
    password: hashed
  });

  res.status(201).json({
    _id: user._id,
    token: generateToken(user._id)
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email
  });

  if (
    user &&
    (await bcrypt.compare(
      password,
      user.password
    ))
  ) {
    return res.json({
      token: generateToken(user._id)
    });
  }

  res.status(400).json({
    message: "Invalid credentials"
  });
};

module.exports = {
  registerUser,
  loginUser
};