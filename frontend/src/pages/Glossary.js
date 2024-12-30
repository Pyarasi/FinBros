import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Hardcoded topics for now (can be fetched dynamically from a database)
  const topics = [
    {
      id: 'personal-finance',
      title: 'Personal Finance',
      description: 'Learn how to manage your finances effectively.',
    },
    {
      id: 'taxation',
      title: 'Taxation',
      description: 'Understand the basics of taxes and how they affect you.',
    },
    {
      id: 'investing',
      title: 'Investing',
      description: 'Explore investment strategies and grow your wealth.',
    },
    {
      id: 'retirement-planning',
      title: 'Retirement Planning',
      description: 'Plan ahead for a secure retirement.',
    },
    {
      id: 'cryptocurrency',
      title: 'Cryptocurrency',
      description: 'Dive into the world of digital currencies.',
    },
  ];

  // Filter topics based on the search term
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-100 p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">What would you like to learn today?</h1>
        <input
          type="text"
          placeholder="Search for topics..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => (
          <Link to={`/glossary/${topic.id}`} key={topic.id}>
            <div className="card bg-white shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">{topic.title}</h2>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Glossary;