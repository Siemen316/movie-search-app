import React, { useContext } from 'react';
import { darkThemeContext } from '../App';
const Dark = () => {
  const handleTheme = useContext(darkThemeContext);
  return (
    <>
      <li>
        <i onClick={handleTheme} className="fas fa-adjust fa-lg dlogo"></i>
      </li>
    </>
  );
};

export default Dark;
