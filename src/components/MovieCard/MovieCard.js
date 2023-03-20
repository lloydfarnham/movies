import React from 'react';
import './MovieCard.css';

function MovieCard(props) {
  const { movie, getGenreNames } = props;

  return (
    <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
        <h4>{getGenreNames(movie.genre_ids).join(', ')}</h4>
        <h2>{movie.title}</h2>
        <h3>{movie.overview}</h3>
    </div>
  );
}

export default MovieCard;
