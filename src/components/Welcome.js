import React from 'react';
import undraw from '../assets/undraw_welcome_3gvl.svg';

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={undraw} alt="" />
      <h2>
        <button className="btn3">WELCOME</button>
        <p>THE ONE STOP DESTINATION FOR SEARCHING MOVIES</p>
      </h2>
    </div>
  );
};

export default Welcome;
