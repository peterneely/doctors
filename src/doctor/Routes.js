import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Doctor from './Doctor';
import Doctors from './Doctors';
import AddReview from './AddReview';
import EditReview from './EditReview';

const createRoutes = root => [
  { path: `${root}/` },
  { Component: Doctor, path: `${root}/:id` },
  { Component: AddReview, path: `${root}/:id/add-review` },
  { Component: EditReview, path: `${root}/:id/edit-review` },
];

const DoctorRouter = ({ root = '' }) => (
  <div>
    {createRoutes(root).map(({ Component = () => null, path }) => (
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
  </div>
);

DoctorRouter.propTypes = {
  root: PropTypes.string,
};

export default DoctorRouter;
