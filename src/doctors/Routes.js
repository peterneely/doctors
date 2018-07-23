import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Doctor from './Doctor';
import Doctors from './Doctors';
import AddReview from './AddReview';
import EditReview from './EditReview';
import history from '../history';

export const rootPath = '/doctors';

const routes = [
  { path: `${rootPath}/` },
  { Component: Doctor, path: `${rootPath}/:doctorId` },
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
