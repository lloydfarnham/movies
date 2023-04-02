import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import Search from '../Search/Search';
import './LandingPage.css';

function LandingPage({ searchQuery }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  return (
    <div className="container">
      {query === '' ? (
        <>
          <MovieList Url="popular" Title="Popular movies" />
          <MovieList Url="top_rated" Title="Top rated" />
          <MovieList Url="upcoming" Title="Upcoming" />
        </>
      ) : (
        <Search query={query} Title="Search results" />
      )}
    </div>
  );
}

export default LandingPage;
