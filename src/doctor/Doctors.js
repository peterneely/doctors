import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import DoctorRouter from './DoctorRouter';

class Doctors extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>Doctors</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

Doctors.propTypes = {};

export default Doctors;
