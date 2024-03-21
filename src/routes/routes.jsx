import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Overview from '../components/overview/overview';
import Contact from '../components/contact/contact';
import Favorites from '../components/favorites/favorites';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/contacts" component={Contact} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default Routes;
