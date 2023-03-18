import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    var apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US';

    axios.get(apiUrl)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const genreApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US';

    axios.get(genreApi)
      .then(response => setGenres(response.data.genres))
      .catch(error => console.log(error));
  }, []);

  function getGenreNames(genreIds) {
    return genreIds.map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : '';
    });
  }

  return (
    <div class="container">
        <div class="title-search">
            <h1>Popular Movies</h1>
            <div class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search"></input>
            </div>
        </div>

        <div class="grid">
            {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} getGenreNames={getGenreNames}/>
            ))}
        </div>
    </div>
  );
}

export default MovieList;
