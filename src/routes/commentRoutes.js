const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddlewares");

const {
  createComment,
  getComments,
  deleteComment,
} = require("../controllers/commentControllers");

router.post(
  "/:postId",
  protect,
  createComment
);

router.get("/:postId", getComments);

router.delete(
  "/delete/:id",
  protect,
  deleteComment
);

module.exports = router;