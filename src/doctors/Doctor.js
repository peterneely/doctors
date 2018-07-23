import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import DoctorHeader from './DoctorHeader';
import ReviewListItems from './ReviewListItems';
import { doctor as styles } from './styles';

class Doctor extends Component {
  setHeaderHeight = height => {
    this.headerHeight = height;
  };

  render() {
    const { doctor, height, reviewsById } = this.props;
    const hasDoctor = !!doctor.id;
    return !hasDoctor ? null : (
      <div style={styles.container}>
        <DoctorHeader doctor={doctor} setHeight={this.setHeaderHeight} />
        <ReviewListItems
          headerHeight={this.headerHeight}
          layoutHeight={height}
          reviewsById={reviewsById}
        />
      </div>
    );
  }
}

Doctor.propTypes = {
  actions: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  reviewsById: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const {
    doctors: { activeDoctor: doctor = {}, reviewsById = {} },
    layout: { height = 'auto' },
  } = state;
  return { doctor, height, reviewsById };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctor);
