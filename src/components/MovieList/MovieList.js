import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList(props) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${props.Url}?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US`;
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const genreApi =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US";

    axios
      .get(genreApi)
      .then((response) => setGenres(response.data.genres))
      .catch((error) => console.log(error));
  }, []);

  // Great helper function for the genres
  function getGenreNames(genreIds) {
    return genreIds.map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.name : "";
    });
  }

  return (
    <div class="container">
      <h1>{props.Title}</h1>

      <div class="grid-container">
        <div class="grid snaps-inline">
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
    </div>
  );
}

export default MovieList;
