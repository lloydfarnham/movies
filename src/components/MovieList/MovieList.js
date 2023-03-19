import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedOption, setSelectedOption] = useState('popular');

  useEffect(() => {
    let apiUrl;
    if (selectedOption === 'popular') {
      apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US';
    } else if (selectedOption === 'topRated') {
      apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US';
    }

    axios.get(apiUrl)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, [selectedOption]);

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

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div class="container">
        <div class="title-search">
            <select class="dropdown" id="view" onChange={handleOptionChange}> 
                <option value="popular">Popular Movies</option>
                <option value="topRated">Top Rated Movies</option>
            </select>
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
