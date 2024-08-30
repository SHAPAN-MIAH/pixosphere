const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const { createPost, likeAndUnlike } = require("../controllers/post");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndUnlike);

module.exports = router;
