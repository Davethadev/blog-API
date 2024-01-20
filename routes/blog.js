const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");

const {
  getAllBlogs,
  getAllMyBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  publishBlog,
  unpublishBlog,
} = require("../controllers/blog");

const {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment");

// BLOG ROUTES
router.route("/").get(getAllBlogs).post(authenticateUser, createBlog);
router.route("/me").get(authenticateUser, getAllMyBlogs);
router
  .route("/:id")
  .get(getBlog)
  .patch(authenticateUser, updateBlog)
  .delete(authenticateUser, deleteBlog)
  .put(authenticateUser, publishBlog);

router.route("/:id/unpublish").put(unpublishBlog);

// COMMENTS ROUTE
router.route("/:id/comment").get(getAllComments).post(createComment);
router
  .route("/:id/comment/:id")
  .get(getComment)
  .patch(updateComment)
  .delete(deleteComment);

module.exports = router;
