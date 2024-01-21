const Blog = require("../models/blog");
const Comment = require("../models/comment");

const { BadRequestError, NotFoundError } = require("../errors");

const publishBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) throw new NotFoundError(`No blog with id : ${blogId} found`);
  blog.is_published = true;
  await blog.save();
  res.status(200).json({ blog });
};

const unpublishBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) throw new NotFoundError(`No blog with id : ${blogId} found`);
  blog.is_published = false;
  await blog.save();
  res.status(200).json({ blog });
};

const getAllBlogs = async (req, res) => {
  const [posts, total_posts] = await Promise.all([
    await Blog.find({ is_published: true }).sort({ createdAt: -1 }),
    await Blog.countDocuments({ is_published: true }).exec(),
  ]);
  res.status(200).json({ posts, total_posts });
};

const getAllMyBlogs = async (req, res) => {
  const [posts, total_posts] = await Promise.all([
    await Blog.find().sort({ createdAt: -1 }),
    await Blog.countDocuments({}).exec(),
  ]);
  res.status(200).json({ posts, total_posts });
};

const getBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const [blog, comments, total_comments] = await Promise.all([
    await Blog.findById(blogId),
    await Comment.find({ blog_id: blogId }, "email comment").sort({
      createdAt: -1,
    }),
    await Comment.countDocuments({ blog_id: blogId }).exec(),
  ]);
  if (!blog) throw new NotFoundError(`No blog with id : ${blogId} found`);
  res.status(200).json({ blog, comments, total_comments });
};

const createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(200).json({ blog });
};

const updateBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const blog = await Blog.findByIdAndUpdate(blogId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!blog) throw new NotFoundError(`No blog with id : ${blogId} found`);

  res.status(200).json({ blog });
};

const deleteBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const blog = await Blog.findByIdAndDelete(blogId).exec();
  if (!blog) throw new NotFoundError(`No blog with id : ${blogId} found`);
  await Comment.deleteMany({ blog_id: blogId });
  res.sendStatus(200);
};

module.exports = {
  getAllBlogs,
  getAllMyBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  publishBlog,
  unpublishBlog,
};
