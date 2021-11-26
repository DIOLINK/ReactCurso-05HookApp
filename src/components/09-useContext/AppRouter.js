import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import LoginPage from './LoginPages';
const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact="true" path="/" element={<HomePage />} />
            <Route exact="true" path="/about" element={<AboutPage />} />
            <Route exact="true" path="/login" element={<LoginPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
