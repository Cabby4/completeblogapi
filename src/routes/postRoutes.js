const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validationMiddlewares");
const { postSchema } = require("../validation/postValidation"); 
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
  upload.single("image"), validate(postSchema),
  createPost
);

router.put(
  "/:id",
  protect,
  upload.single("image"), validate(postSchema),
  updatePost
);

router.delete("/:id", protect, deletePost);

module.exports = router;