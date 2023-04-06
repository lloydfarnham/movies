import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard(props) {
  const { movie, getGenreNames } = props;
  const releaseYear = movie.release_date.slice(0, 4);

  return (
    <Link to={`/${props.id}`} className="no-underline">
      <div className="movie-card">
        <div className="backdrop">
          {/* Great use of a fallback here */}
          {movie.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          ) : (
            <img
              src="https://via.placeholder.com/500x281.png?text=No+Image+Available"
              alt="No Image Available"
            />
          )}
          <h4 className="rating">
            {movie.vote_average.toFixed(1)}
            <span className="ten">/10</span>
          </h4>
        </div>
        {/* Great use of a utility function here */}
        <h4>{getGenreNames(movie.genre_ids).join(", ")}</h4>
        <h2>{movie.title}</h2>
        <h4>({releaseYear})</h4>
        <h3>{movie.overview}</h3>
      </div>
    </Link>
  );
}

export default MovieCard;
