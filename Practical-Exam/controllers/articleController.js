// controllers/articleController.js
const Article = require("../models/ArticleModel");

// Create Article
exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.id;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const article = new Article({ title, content, author });
    await article.save();

    res.status(201).json({ message: "Article created successfully", article });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getMyArticles = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user.id });
    res.json({ articles });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate("author", "username email");
    res.json({ articles });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.findOneAndUpdate(
      { _id: req.params.id, author: req.user.id },
      { title, content },
      { new: true }
    );

    if (!article) return res.status(404).json({ message: "Article not found" });

    res.json({ message: "Article updated successfully", article });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete Article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findOneAndDelete({ _id: req.params.id, author: req.user.id });
    if (!article) return res.status(404).json({ message: "Article not found" });

    res.json({ message: "Article deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
