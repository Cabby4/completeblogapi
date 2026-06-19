const Comment = require("../models/comment");

const createComment = async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    user: req.user._id,
    post: req.params.postId,
  });

  const populatedComment =
    await Comment.findById(comment._id)
      .populate("user", "name avatar");

  res.status(201).json(populatedComment);
};

const getComments = async (req, res) => {
  const comments = await Comment.find({
    post: req.params.postId,
  })
    .populate("user", "name avatar")
    .sort("-createdAt");

  res.json(comments);
};

const deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return res.status(404).json({
      message: "Comment not found",
    });
  }

  if (comment.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }

  await comment.deleteOne();

  res.json({
    message: "Comment deleted",
  });
};

module.exports = {
  createComment,
  getComments,
  deleteComment
};