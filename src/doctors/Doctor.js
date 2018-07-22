import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Doctor extends Component {
  content = (() => {
    return {
      render: () => {
        const {
          doctorsById,
          match: {
            params: { id },
          },
        } = this.props;
        const doctor = doctorsById[id];
        return !doctor ? null : <div>Doctor {doctor.name.first}</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

Doctor.propTypes = {
  doctorsById: PropTypes.object,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const {
    doctors: { doctorsById },
  } = state;
  return { doctorsById };
};

export default connect(mapStateToProps)(Doctor);
