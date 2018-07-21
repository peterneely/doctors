import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import DoctorRoutes from './doctor/Routes';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Redirect from="/" exact to="/doctors" />
            <DoctorRoutes />
            <Route component={() => 'Not Found'} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
