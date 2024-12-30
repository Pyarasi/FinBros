require('dotenv').config(); // Load .env variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const News = require('./models/News'); // Assuming you have a News model
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// MongoDB Atlas connection using .env variable
const mongoUri = process.env.MONGO_URI; // Fetch MongoDB URI from .env
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  })
  .on('error', (err) => {
    console.error('MongoDB Atlas connection error:', err.message);
  });

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Signup Endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password and save the new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    console.error('Error during signup:', err.message);
    res.status(500).json({ message: 'Signup failed. Please try again.' });
  }
});

// Simplified Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Send back the user details if login is successful
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all news articles
app.get('/api/news', async (req, res) => {
  try {
    const newsArticles = await News.find();
    console.log('Fetched News Articles:', newsArticles); // Log fetched articles
    res.json(newsArticles);
  } catch (err) {
    console.error('Error fetching news:', err.message);
    res.status(500).json({ message: 'Failed to fetch news articles' });
  }
});

// Add a new news article
app.post('/api/news', async (req, res) => {
  const { title, description, url } = req.body;
  try {
    const newsArticle = new News({ title, description, url });
    await newsArticle.save();
    res.status(201).json(newsArticle);
  } catch (err) {
    console.error('Error adding news article:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// Delete all news articles (Optional, for testing purposes)
app.delete('/api/news', async (req, res) => {
  try {
    await News.deleteMany({});
    res.status(200).json({ message: 'All news articles deleted' });
  } catch (err) {
    console.error('Error deleting news articles:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Sample API for articles
app.get('/api/articles', (req, res) => {
  const articles = [
    {
      _id: '1',
      title: 'Introduction to Investing',
      content: 'Investing can help grow your wealth over time.',
      category: 'Investment',
    },
    {
      _id: '2',
      title: 'What is Cryptocurrency?',
      content: 'A closer look at Bitcoin, Ethereum, and more.',
      category: 'Crypto',
    },
  ];
  res.json(articles);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});