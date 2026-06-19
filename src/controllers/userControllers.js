const User = require("../models/user");

const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  res.json(user);
};

const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  user.name = req.body.name || user.name;
  user.bio = req.body.bio || user.bio;

  if (req.file) {
    user.avatar = req.file.filename;
  }

  const updatedUser = await user.save();

  res.json(updatedUser);
};

module.exports = { getProfile, updateProfile };