import React from 'react';
import './MovieCard.css';

function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;
