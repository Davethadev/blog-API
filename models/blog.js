const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 6,
    },
    blog_post: {
      type: String,
      required: true,
      minLength: 6,
    },
    is_published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Virtual for instance of blog
// BlogSchema.virtual("url").get(function () {
//   return "/blog" + this._id;
// });

module.exports = mongoose.model("Blog", BlogSchema);
