import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9';

    axios.get(apiUrl)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <h1>Popular Movies</h1>
        <div class="grid">
            {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </div>
  );
}

export default MovieList;
