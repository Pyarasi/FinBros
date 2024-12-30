import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Glossary from './pages/Glossary';
import Themes from './pages/Themes';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [user, setUser] = useState(null); // State to store the logged-in user

  // Check if user data exists in localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []);

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Router>
        {/* Navbar */}
        <div className="navbar bg-gray-800 text-white">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              FinBros
            </Link>
          </div>
          <div className="flex-none">
            <Link to="/news" className="btn btn-ghost">News</Link>
            <Link to="/glossary" className="btn btn-ghost">Glossary</Link>
            <Link to="/themes" className="btn btn-primary">Themes</Link>
            {!user ? (
              <>
                <Link to="/login" className="btn btn-ghost">Login</Link>
                <Link to="/signup" className="btn btn-ghost">Sign Up</Link>
              </>
            ) : (
              <button
                className="btn btn-error"
                onClick={() => {
                  localStorage.removeItem('user');
                  setUser(null);
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/glossary/*" element={<Glossary />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Footer */}
        <footer className="footer footer-center p-4 bg-gray-800 text-white mt-auto">
          {user ? (
            <p>Logged in as: {user.email}</p>
          ) : (
            <p>Welcome to FinBros. Please log in or sign up.</p>
          )}
        </footer>
      </Router>
    </div>
  );
}

export default App;