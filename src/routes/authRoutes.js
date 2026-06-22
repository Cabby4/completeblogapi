
const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authControllers");

const validate = require("../middlewares/validationMiddlewares");

const {
  registerSchema,
  loginSchema,
} = require("../validation/authValidation");

router.post(
  "/register",
  validate(registerSchema),
  registerUser
);

router.post(
  "/login",
  validate(loginSchema),
  loginUser
);

module.exports = router;