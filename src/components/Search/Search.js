import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import "./Search.css";

function Search({ query, Title }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US&query=${query}`;

    axios
      .get(apiUrl)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, [query]);

  useEffect(() => {
    const genreApi =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US";

    axios
      .get(genreApi)
      .then((response) => setGenres(response.data.genres))
      .catch((error) => console.log(error));
  }, []);

  function getGenreNames(genreIds) {
    return genreIds.map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.name : "";
    });
  }

  movies.sort((a, b) => b.vote_count - a.vote_count);

  return (
    <div className="container">
      <h1>{Title}</h1>

      <div className="searchGrid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            getGenreNames={getGenreNames}
            {...movie}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
