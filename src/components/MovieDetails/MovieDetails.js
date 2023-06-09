import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Recs from "../Recs/Recs";
import "./MovieDetails.css";

export default function MovieDetails(props) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const releaseDate = new Date(movieDetails?.release_date);
  const options = {
    day: "numeric",
    daySuffix: "long",
    month: "long",
    year: "numeric",
  };
  // Great formatting here
  const formattedReleaseDate = releaseDate.toLocaleDateString("en-UK", options);
  const formattedBudget = movieDetails?.budget
    ? `$${Number(movieDetails?.budget).toLocaleString()}`
    : null;
  const formattedRevenue = movieDetails?.revenue
    ? `$${Number(movieDetails?.revenue).toLocaleString()}`
    : null;

  function fetchMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dc0fb7b28045cd04916b73e857aec4f9`
      )
      .then((response) => setMovieDetails(response.data));
  }

  useEffect(() => {
    fetchMovies();
  }, [id]);

  return (
    <div key={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path})`,
        }}
      >
        <div className="gradient">
          <div className="poster-container">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
            ></img>
          </div>
          <div className="details-container">
            <h1 className="title">{movieDetails?.title}</h1>
            <p className="overview">{movieDetails?.overview}</p>
            <p>Release date: {formattedReleaseDate}</p>
            <p>Runtime: {movieDetails?.runtime} minutes</p>
            {formattedBudget && <p>Budget: {formattedBudget}</p>}
            {formattedRevenue && <p>Revenue: {formattedRevenue}</p>}
          </div>
        </div>
      </div>
      <Recs id={id} />
    </div>
  );
}
