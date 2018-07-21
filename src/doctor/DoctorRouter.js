import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import DoctorLayout from './DoctorLayout';
import Doctor from './Doctor';
import Doctors from './Doctors';
import AddReview from './AddReview';
import EditReview from './EditReview';

class DoctorRouter extends Component {
  content = (() => {
    const routes = [
      {
        Component: Doctors,
        exact: true,
        path: '/',
      },
      {
        Component: Doctor,
        path: '/doctor',
      },
      {
        Component: AddReview,
        path: '/add-review',
      },
      {
        Component: EditReview,
        path: '/edit-review',
      },
    ];
    return {
      render: () => {
        return (
          <div>
            {routes.map(({ Component, exact = false, path }) => (
              <Route
                exact={exact}
                key={path}
                path={path}
                render={props => (
                  <DoctorLayout {...props}>
                    <Component {...props} />
                  </DoctorLayout>
                )}
              />
            ))}
          </div>
        );
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

DoctorRouter.propTypes = {};

export default DoctorRouter;
