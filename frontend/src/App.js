import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Themes from './pages/Themes';

function App() {
  const [articles, setArticles] = useState([]); // State to store articles

  // Fetch articles from the backend
  useEffect(() => {
    axios
      .get('http://localhost:5001/api/articles') // Replace with your backend URL if deployed
      .then((response) => {
        setArticles(response.data); // Update state with fetched articles
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []); // Empty dependency array means this runs once on component load

  return (
    // Main container with DaisyUI's bg-base-100 for dynamic theme changes
    <div className="min-h-screen bg-base-100">
      <Router>
        <nav className="p-5 bg-gray-800 text-white">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/themes">Themes</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-5">
                <h1 className="text-4xl font-bold mb-4">Welcome to FinBros</h1>
                <h2 className="text-2xl mb-4">Finance Articles</h2>
                <ul>
                  {articles.map((article) => (
                    <li key={article._id} className="mb-4">
                      <h3 className="text-xl font-semibold">{article.title}</h3>
                      <p className="text-gray-700">{article.content}</p>
                      <p className="text-gray-500">
                        <strong>Category:</strong> {article.category}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;