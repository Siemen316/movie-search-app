import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const MovieInfo = ({ match }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://omdbapi.com/?apikey=810c14f&i=${match.params.id}`)
      .then((res) => {
        setMovieInfo(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [match.params.id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="movieInfo">
          <div className="side-content">
            <img src={movieInfo.Poster} alt="" />
            <h3>{movieInfo.Title}</h3>
          </div>
          <div className="main-content">
            <p>
              {' '}
              <span>Cast</span> : {movieInfo.Actors}
            </p>
            <p>
              <span>Director</span> : {movieInfo.Director}
            </p>
            <p>
              <span>Plot</span> : {movieInfo.Plot}
            </p>
            <p>
              <span>Language</span> : {movieInfo.Language}
            </p>
            <p>
              <span>Genre</span> : {movieInfo.Genre}
            </p>
            <p>
              <span>Runtime</span> : {movieInfo.Runtime}
            </p>
            <p>
              <span>Released</span> : {movieInfo.Released}
            </p>
            <p>
              <span>imdbRating</span> : {movieInfo.imdbRating}
            </p>
            <Link to={`/`}>
              <button className="btn2">back</button>
            </Link>
            <button className="btn2">
              <a
                style={{ textDecoration: 'none', color: '#fff' }}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.imdb.com/title/${movieInfo.imdbID}/`}
              >
                IMDB
              </a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
