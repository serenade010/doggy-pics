import React from 'react';
import HomePage from './HomePage';
import DogPage from './DogPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dog/:name" component={DogPage} />
      </Switch>
    </Router>
  );
}

export default App;
