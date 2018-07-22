import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import DoctorRoutes from './doctors/Routes';
import history from './history';
import theme from './theme';

const App = () => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Redirect from="/" exact to="/doctors" />
        <DoctorRoutes />
        <Route component={() => 'Uh oh'} />
      </Switch>
    </MuiThemeProvider>
  </Router>
);

export default App;
