import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import DoctorRoutes from './doctor/Routes';
import NotFound from './common/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Redirect from="/" exact to="/doctors" />
            <DoctorRoutes root="/doctors" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
