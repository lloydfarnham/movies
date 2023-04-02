import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(query) {
    setSearchQuery(query);
  }

  return (
    <div className="app">
      <NavBar onSearchInputChange={handleSearch} />

      <Routes>
        <Route path="/" element={<LandingPage searchQuery={searchQuery} />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
