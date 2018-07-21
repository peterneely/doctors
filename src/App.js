import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DoctorRouter from './doctor/DoctorRouter';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <DoctorRouter />
        </Switch>
      </Router>
    );
  }
}

export default App;
