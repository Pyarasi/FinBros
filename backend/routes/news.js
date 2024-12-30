const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Get all news articles
router.get('/', async (req, res) => {
  try {
    const newsArticles = await News.find();
    res.json(newsArticles);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch news articles' });
  }
});

// Add a new news article
router.post('/', async (req, res) => {
  const { title, description, url } = req.body;
  try {
    const newsArticle = new News({ title, description, url });
    await newsArticle.save();
    res.status(201).json(newsArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete all news articles (Optional, for testing purposes)
router.delete('/', async (req, res) => {
  try {
    await News.deleteMany({});
    res.status(200).json({ message: 'All news articles deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;