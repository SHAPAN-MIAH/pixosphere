const User = require("../models/User");
const Post = require("../models/Post");
const { sendEmail } = require("../middlewares/sendEmail");
const crypto = require("crypto");

// register controller.
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    user = await User.create({
      name,
      email,
      password,
      avatar: { public_id: "sample_public_id", url: "sample-url" },
    });

    const token = await user.generateToken();
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist.",
      });
    }

    const isMatch = user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password.",
      });
    }

    const token = await user.generateToken();
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// logout controller
exports.logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        success: true,
        message: "logged out",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// follow user controller
exports.followUser = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req.user._id);

    if (!userToFollow) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (loggedInUser.following.includes(userToFollow._id)) {
      const indexFollowing = loggedInUser.following.indexOf(userToFollow._id);
      loggedInUser.following.splice(indexFollowing, 1);

      const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id);
      userToFollow.followers.splice(indexFollowers, 1);

      await loggedInUser.save();
      await userToFollow.save();

      res.status(200).json({
        success: true,
        message: "User Unfollowed",
      });
    } else {
      loggedInUser.following.push(userToFollow._id);
      userToFollow.followers.push(loggedInUser._id);

      await loggedInUser.save();
      await userToFollow.save();

      res.status(200).json({
        success: true,
        message: "User followed",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update password controller
exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || newPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide old and new password.",
      });
    }

    isMatch = await user.matchPassword(oldPassword);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Old Password.",
      });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update profile controller
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("+password");
    const { name, email } = req.body;

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }

    // user avatar todo

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete profile controller..
exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const posts = user.posts;
    const followers = user.followers;
    const following = user.following;
    const userId = user._id;

    await user.deleteOne();

    // logout user after delete profile
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    // Delete all posts of the user.
    for (let i = 0; i < posts.length; i++) {
      const post = await Post.findById(posts[i]);
      await post.deleteOne();
    }

    // Delete user from followers following
    for (let i = 0; i < followers.length; i++) {
      const follower = await User.findById(followers[i]);

      const index = follower.following.indexOf(userId);

      follower.following.splice(index, 1);

      await follower.save();
    }

    // Remove user from following's follower
    for (let i = 0; i < following.length; i++) {
      const follows = await User.findById(following[i]);

      const index = follows.followers.indexOf(userId);

      follows.followers.splice(index, 1);

      await follows.save();
    }

    res.status(200).json({
      success: true,
      message: "Profile deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get my profile controller.
exports.myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("posts");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get user profile controller
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("posts");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all users controller
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// forgot password controller
exports.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const resetPasswordToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/password/reset/${resetPasswordToken}`;
    const message = `Reset your password by clicking link below: \n\n ${resetUrl}`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Reset Password",
        message,
      });

      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email}`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Export password controller
exports.resetPassword = async (req, res) => {
  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid or expired",
      });
    }

    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password updated",
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
