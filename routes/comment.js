const express = require("express");
const router = express.Router();

const {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment");

router.route("/").get(getAllComments).post(createComment);
router.route("/:id").get(getComment).patch(updateComment).delete(deleteComment);

module.exports = router;
