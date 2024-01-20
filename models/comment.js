const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    email: {
      type: String,
      minLength: 6,
    },
    comment: {
      type: String,
      minLength: 6,
    },
    blog_id: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
  },
  { timestamps: true }
);

// Virtual for instance of comment
// CommentSchema.virtual("url").get(function () {
//   return "/blog/" + this._id + "/comment";
// });

module.exports = mongoose.model("Comment", CommentSchema);
