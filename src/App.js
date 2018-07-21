import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import DoctorRoutes from './doctor/Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Redirect from="/" exact to="/doctors" />
            <DoctorRoutes root="/doctors" />
            <Route component={() => 'Not Found'} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
