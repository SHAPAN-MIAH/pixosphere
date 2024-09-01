const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const {
  createPost,
  likeAndUnlike,
  deletePost,
  getPostOfFollowing,
  updateCaption,
} = require("../controllers/post");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlike)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

module.exports = router;
