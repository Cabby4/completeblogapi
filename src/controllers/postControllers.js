const Post = require("../models/post");

const createPost = async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.user._id,
    image: req.file ? req.file.filename : "",
  });

  res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("author", "name avatar")
    .populate("category");

  res.json(posts);
};

const getSinglePost = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "name avatar")
    .populate("category");

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.json(post);
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.category = req.body.category || post.category;

  if (req.file) {
    post.image = req.file.filename;
  }

  const updatedPost = await post.save();

  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }

  await post.deleteOne();

  res.json({
    message: "Post deleted successfully",
  });
};

module.exports = {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost
};