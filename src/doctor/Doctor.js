import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Doctor extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>Doctor</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

Doctor.propTypes = {};

export default Doctor;
