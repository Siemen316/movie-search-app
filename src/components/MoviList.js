import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/not-found.jpg';

const MoviList = ({ movieList }) => {
  const url = movieList.Poster === 'N/A' ? defaultImage : movieList.Poster;
  return (
    <div className="card">
      <img src={url} alt={movieList.Title} />
      <h3>{movieList.Title}</h3>
      <Link to={`/movie/${movieList.imdbID}`}>
        <button className="btn2">READ MORE</button>
      </Link>
    </div>
  );
};

export default MoviList;
