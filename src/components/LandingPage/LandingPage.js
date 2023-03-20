import React from 'react';
import MovieList from '../MovieList/MovieList';
import './LandingPage.css';

function LandingPage () {
    return (
        <div>
            <MovieList Url="popular" Title="Popular Movies" />
            <MovieList Url="top_rated" Title="Top Rated" />
            {/* <MovieList Url="latest" Title="Latest" /> */}
        </div>
    );
};

export default LandingPage;