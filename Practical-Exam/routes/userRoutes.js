const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { verifyToken } = require("../middleware/authMiddleware");

// ✅ Update user info (only for logged-in user)
router.put("/update/:id", verifyToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "User updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
});

// ✅ Delete user (only for admin)
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

module.exports = router;
