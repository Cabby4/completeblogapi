const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddlewares");
const upload = require("../middlewares/uploadMiddlewares");

const {
  getProfile,
  updateProfile,
} = require("../controllers/userControllers");

router.get("/profile", protect, getProfile);

router.put(
  "/profile",
  protect,
  upload.single("avatar"),
  updateProfile
);

module.exports = router;