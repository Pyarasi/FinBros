import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold">Welcome to FinBros</h1>
            <p className="py-6 text-lg">
              Discover, learn, and master the art of finance. From the latest financial news to in-depth glossary topics, FinBros is here to guide you through the world of money.
            </p>
            <button className="btn btn-accent btn-lg">Get Started</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-10 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card shadow-xl bg-base-100">
            <div className="card-body">
              <h3 className="card-title text-2xl">Latest News</h3>
              <p>Stay updated with the latest trends in the financial world.</p>
              <button className="btn btn-primary">Read News</button>
            </div>
          </div>
          <div className="card shadow-xl bg-base-100">
            <div className="card-body">
              <h3 className="card-title text-2xl">Glossary Topics</h3>
              <p>Explore detailed explanations of finance concepts.</p>
              <button className="btn btn-secondary">Explore Glossary</button>
            </div>
          </div>
          <div className="card shadow-xl bg-base-100">
            <div className="card-body">
              <h3 className="card-title text-2xl">Dynamic Themes</h3>
              <p>Customize your experience with multiple themes.</p>
              <button className="btn btn-accent">Customize Themes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="p-10 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-6">Market Trends</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Stock Prices</h3>
              <p>A quick glance at today's stock market trends.</p>
              <div className="mockup-window border bg-base-300 mt-4">
                <div className="bg-base-200 flex justify-center items-center h-32">
                  <p className="text-gray-500">Graph Placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Crypto Trends</h3>
              <p>Explore the rise and fall of popular cryptocurrencies.</p>
              <div className="mockup-window border bg-base-300 mt-4">
                <div className="bg-base-200 flex justify-center items-center h-32">
                  <p className="text-gray-500">Graph Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Ready to take control of your finances?</h2>
          <p className="mt-4 text-lg">
            Join the FinBros community today and start your journey to financial literacy.
          </p>
                <button
                onClick={() => navigate('/signup')}
                className="btn btn-primary"
                >
                Sign Up Now
                </button>
        </div>
      </div>
    </div>
  );
};

export default Home;