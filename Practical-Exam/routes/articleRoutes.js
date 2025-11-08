const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

// Middleware
const authMiddleware = require("../middleware/authMiddleware");

// Controllers
const {
  createArticle,
  getMyArticles,
  getAllArticles,
  updateArticle,
  deleteArticle
} = require("../controllers/articleController");

// Routes
router.post("/create", upload.none(), authMiddleware, createArticle);
router.get("/my-articles", authMiddleware, getMyArticles);
router.get("/all", getAllArticles); // public endpoint
router.put("/update/:id", authMiddleware, updateArticle);
router.delete("/delete/:id", authMiddleware, deleteArticle);

module.exports = router;
