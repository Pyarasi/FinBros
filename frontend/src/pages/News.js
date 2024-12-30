import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://finbros-backend-cb6i2cd2e-pyarasis-projects.vercel.app/api/news') // Update URL if deployed
      .then((response) => {
        setNewsArticles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
        setError('Failed to fetch news articles');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading news articles...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <div key={article._id} className="card bg-base-100 shadow-xl p-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-600 my-2">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;