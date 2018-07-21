import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import DoctorRoutes from './doctor/Routes';
import history from './history';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Redirect from="/" exact to="/doctors" />
            <DoctorRoutes />
            <Route component={() => 'Not Found'} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
