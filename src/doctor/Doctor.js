import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Doctor extends Component {
  content = (() => {
    return {
      render: () => {
        const { match = {} } = this.props;
        const { params = {} } = match;
        return <div>Doctor {params.id}</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

Doctor.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Doctor;
