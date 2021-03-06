import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <h1>
        MOVIE SEARCH APP
        <i className="fas fa-film mlogo"></i>
      </h1>
      <ul className="flex-ul">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
