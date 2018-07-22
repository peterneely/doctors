import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Doctor from './Doctor';
import Doctors from './Doctors';
import AddReview from './AddReview';
import EditReview from './EditReview';

export const rootPath = '/doctors';

const routes = [
  { path: `${rootPath}/` },
  { Component: Doctor, path: `${rootPath}/:id` },
  { Component: AddReview, path: `${rootPath}/:id/add-review` },
  { Component: EditReview, path: `${rootPath}/:id/edit-review` },
];

const Routes = () => (
  <Fragment>
    {routes.map(({ Component = () => null, path }) => (
      <Route
        exact
        key={path}
        path={path}
        render={props => (
          <Doctors {...props}>
            <Component {...props} />
          </Doctors>
        )}
      />
    ))}
  </Fragment>
);

export default Routes;
