import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import DoctorHeader from './DoctorHeader';
import { doctor as styles } from './styles';

class Doctor extends Component {
  render() {
    const { doctor, height } = this.props;
    return !doctor ? null : (
      <div style={styles.container(height)}>
        <DoctorHeader doctor={doctor} />
      </div>
    );
  }
}

Doctor.propTypes = {
  actions: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
  height: PropTypes.number,
};

const mapStateToProps = state => {
  const {
    doctors: { activeDoctor: doctor = {} },
    layout: { height },
  } = state;
  return { doctor, height };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctor);
