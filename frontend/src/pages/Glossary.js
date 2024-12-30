import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MutualFunds from './glossary/MutualFunds';
import ETFs from './glossary/ETFs';

const Glossary = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-6">Glossary</h1>
      <div className="mb-4">
        <Link to="mutual-funds" className="btn btn-secondary mr-2">Mutual Funds</Link>
        <Link to="etfs" className="btn btn-secondary">ETFs</Link>
      </div>
      <Routes>
        <Route path="mutual-funds" element={<MutualFunds />} />
        <Route path="etfs" element={<ETFs />} />
      </Routes>
    </div>
  );
};

export default Glossary;