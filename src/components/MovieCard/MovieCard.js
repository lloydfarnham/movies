import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard(props) {
  const { movie, getGenreNames } = props;
  const numFilledStars = Math.round(movie.vote_average / 2);

  return (
    <Link className="no-underline" to="">
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <h4>{getGenreNames(movie.genre_ids).join(', ')}</h4>
            <h2>{movie.title}</h2>
            <h3>{movie.overview}</h3>
        </div>
    </Link>
  );
}

export default MovieCard;
