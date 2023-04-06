import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import "./Recs.css";

// This is a great bonus feature. It is setup very well although the component is not clear at first glance. It could have a better name
function Recs(props) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${props.id}/recommendations?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US&page=1`;
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

  function getGenreNames(genreIds) {
    return genreIds.map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.name : "";
    });
  }

  movies.sort((a, b) => b.vote_count - a.vote_count);

  return (
    <div class="container">
      <h1>Similar titles</h1>

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
      <div className="hideRight"></div>
    </div>
  );
}

export default Recs;
