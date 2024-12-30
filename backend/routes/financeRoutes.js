const express = require('express');
const router = express.Router();
const FinanceArticle = require('../models/FinanceArticle');

// Get all articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await FinanceArticle.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new article
router.post('/articles', async (req, res) => {
  const { title, content, category } = req.body;
  try {
    const article = new FinanceArticle({ title, content, category });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;