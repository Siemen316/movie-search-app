import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center', color: '#fff' }}>
      <p>BUILT WITH REACT</p>
      <p style={{ fontSize: '1.3rem' }}>
        USING THE{' '}
        <a
          style={{ textDecoration: 'none', color: 'cornflowerblue' }}
          href="https://omdbapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OMDb API
        </a>
      </p>
    </div>
  );
};

export default About;
