import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import AddReview from './AddReview';
import Doctors from './Doctors';
import EditReview from './EditReview';
import Reviews from './Reviews';
import history from '../history';

const rootPath = '/doctors';

const routes = [
  { path: `${rootPath}/` },
  { Component: Reviews, path: `${rootPath}/:doctorId` },
  { Component: EditReview, path: `${rootPath}/:doctorId/reviews/:reviewId` },
  { Component: AddReview, path: `${rootPath}/:doctorId/add-review` },
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

export const go = path => {
  history.push(`${rootPath}${path}`);
};
