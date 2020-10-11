import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieSearch from './components/MovieSearch';
import About from './components/About';
import Error from './components/Error';
import MovieInfo from './components/MovieInfo';

export const darkThemeContext = React.createContext();

function App() {
  const [dark, setDark] = useState(false);
  const handleTheme = () => (dark ? setDark(false) : setDark(true));
  return (
    <div
      className={dark ? 'dark' : 'light'}
      // style={
      //   dark ? { backgroundColor: '#12181b' } : { backgroundColor: '#f0f0f0' }
      // }
    >
      <Router>
        <darkThemeContext.Provider value={handleTheme}>
          <NavBar />
        </darkThemeContext.Provider>
        <Switch>
          <Route path="/" component={MovieSearch} exact />
          <Route path="/about" component={About} />
          <Route path="/movie/:id" component={MovieInfo} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
