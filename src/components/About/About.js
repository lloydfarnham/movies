import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="aboutTitle">About</h1>
      <h2 className="aboutBodyCopy">
        Welcome to our movie database web app, where we bring you the latest and
        greatest in cinema. Our platform is designed to help movie lovers like
        you find the perfect movie to watch, whether you're in the mood for
        something new, popular, or upcoming. Our movie database is updated
        daily, so you'll always have access to the latest movies and TV shows.
        We provide detailed information about each movie, including cast and
        crew, plot synopsis, trailers, and ratings from other users.
        <br />
        <br />
        But we don't stop there. Our app is also designed to recommend movies
        that we think you'll love based on your viewing history and preferences.
        So whether you're in the mood for a gripping drama, a heartwarming
        comedy, or an action-packed adventure, we've got you covered.
        <br />
        <br />
        We're passionate about movies, and we want to share that passion with
        you. So come join our community of movie lovers and start exploring our
        vast database of films today!
      </h2>
    </div>
  );
}

export default About;
