const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddlewares");
const upload = require("../middlewares/uploadMiddlewares");

const {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost
} = require("../controllers/postControllers");

router.get("/", getPosts);
router.get("/:id", getSinglePost);

router.post(
  "/",
  protect,
  upload.single("image"),
  createPost
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updatePost
);

router.delete("/:id", protect, deletePost);

module.exports = router;