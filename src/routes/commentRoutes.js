const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddlewares");
const { commentSchema } = require("../validation/commentValidation");
const validate = require("../middlewares/validationMiddlewares");

const {
  createComment,
  getComments,
  deleteComment,
} = require("../controllers/commentControllers");

router.post(
  "/:postId",
  protect,
  validate(commentSchema),
  createComment
);

router.get("/:postId", getComments);

router.delete(
  "/delete/:id",
  protect,
  deleteComment
);

module.exports = router;