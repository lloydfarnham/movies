import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/about" element={<About />} />
      </Routes> 

      <Footer />

    </div>
  );
}

export default App;