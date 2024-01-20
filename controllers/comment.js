const Comment = require("../models/comment");
const Blog = require("../models/blog");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllComments = async (req, res) => {
  const { id: blogId } = req.params;
  if (!blogId) throw new BadRequestError("The blog id is required");
  const [blog, comments, total_comments] = await Promise.all([
    await Blog.findById(blogId),
    await Comment.find({ blog_id: blogId }, "email comment"),
    await Comment.countDocuments({ blog_id: blogId }).exec(),
  ]);
  res.status(200).json({ blog, comments, total_comments });
};

const getComment = async (req, res) => {
  const { id: commentId } = req.params;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new NotFoundError(`No comment with id: ${commentId} found`);
  }
  res.status(200).json({ comment });
};

const createComment = async (req, res) => {
  const { id: blogId } = req.params;
  const comment = await Comment.create({ ...req.body, blog_id: blogId });
  res.status(201).json({ comment });
};

const updateComment = async (req, res) => {
  res.send("updated comment");
};

const deleteComment = async (req, res) => {
  const { id: commentId } = req.params;
  const comment = await Comment.findByIdAndDelete(commentId);
  if (!comment) {
    throw new NotFoundError(`No comment with id: ${commentId} found`);
  }
  res.sendStatus(200);
};

module.exports = {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
