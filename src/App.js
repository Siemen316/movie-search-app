import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieSearch from './components/MovieSearch';
import About from './components/About';
import Error from './components/Error';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <div className={'dark'}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={MovieSearch} exact />
          <Route path="/about" component={About} exact />
          <Route path="/movie/:id" component={MovieInfo} exact />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
