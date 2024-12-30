const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to the FinBros backend!');
});

// Start the server
const PORT = process.env.PORT || 5001; // Use a different port like 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));