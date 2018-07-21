import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Doctor from './Doctor';
import Doctors from './Doctors';
import AddReview from './AddReview';
import EditReview from './EditReview';

class DoctorRouter extends Component {
  content = (() => {
    const createRoutes = root => [
      { path: `${root}/` },
      { Component: Doctor, path: `${root}/doctor` },
      { Component: AddReview, path: `${root}/add-review` },
      { Component: EditReview, path: `${root}/edit-review` },
    ];
    return {
      render: () => {
        const { root = '' } = this.props;
        return (
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
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

DoctorRouter.propTypes = {
  root: PropTypes.string,
};

export default DoctorRouter;
