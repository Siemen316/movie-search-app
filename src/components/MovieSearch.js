import React, { useReducer, useState } from 'react';
import axios from 'axios';
import MoviList from './MoviList';
import Modal from './Modal';
import Loading from './Loading';
import Welcome from './Welcome';
import { reducer } from './reducer';

const initialState = {
  initialMsg: true,
  movies: [],
  isLoading: false,
  isModal: false,
  modalContent: '',
};

const MovieSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch({ type: 'LOADING' });
      axios
        .get(`https://omdbapi.com/?apikey=810c14f&s=${inputValue}`)
        .then((res) => {
          res.data.Search === undefined
            ? dispatch({ type: 'INVALID_MOVIE' })
            : dispatch({ type: 'SUCCESS', payload: res.data.Search });
        })
        .catch((error) => {
          dispatch({ type: 'ERROR' });
        });
    } else {
      dispatch({ type: 'ALERT_MSG' });
    }
    setInputValue('');
  };

  const modalFun = () => {
    dispatch({ type: 'MODAL_FUN' });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="txt"
          type="text"
          value={inputValue}
          placeholder="Search movies.."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn">SEARCH</button>
      </form>

      {state.isModal ? (
        <Modal modalContent={state.modalContent} modalFun={modalFun} />
      ) : null}

      {state.isLoading ? <Loading /> : null}
      <div className="cards">
        {state.movies.map((movie) => {
          return <MoviList key={movie.imdbID} movieList={movie} />;
        })}
      </div>
      {state.initialMsg ? <Welcome /> : null}
    </>
  );
};

export default MovieSearch;
