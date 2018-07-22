import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doctor as styles } from './styles';

class Doctor extends Component {
  content = (() => {
    return {
      render: () => {
        const {
          doctorsById,
          height,
          match: {
            params: { id },
          },
        } = this.props;
        const doctor = doctorsById[id];
        return !doctor ? null : (
          <div style={styles.container(height)}>Doctor {doctor.name.first}</div>
        );
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

Doctor.propTypes = {
  doctorsById: PropTypes.object,
  height: PropTypes.number,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const {
    doctors: { doctorsById = {} },
    layout: { height },
  } = state;
  return { doctorsById, height };
};

export default connect(mapStateToProps)(Doctor);
