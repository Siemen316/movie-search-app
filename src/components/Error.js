import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>PLEASE GO BACK</h1>
      <p>ERROR 404</p>
      <Link to="/">
        <button className="btn2">HOME</button>
      </Link>
    </div>
  );
};

export default Error;
