const express = require("express");
const multer = require("multer");
const { registerUser, loginUser, logoutUser } = require("../controllers/authController");

const router = express.Router();
const upload = multer();

router.post("/register", upload.none(), registerUser);
router.post("/login", upload.none(), loginUser);
router.post("/logout", logoutUser);

module.exports = router;
