import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from './actions';
import DoctorHeader from './DoctorHeader';
import Sizer from '../layout/Sizer';
import { doctor as styles } from './styles';
import { go } from './Routes';

class Doctor extends Component {
  createViewModel = offsetHeight => {
    const {
      actions = {},
      match: { params },
      reviewsById,
    } = this.props;
    const {
      addReview = () => {},
      removeReview = () => {},
      upsertReview: updateReview = () => {},
    } = actions;
    return {
      addReview,
      getHeaderHeight: () => this.state.headerHeight,
      goToNewReview: () => {
        go(`/${params.doctorId}/add-review`);
      },
      goToReview: review => {
        go(`/${params.doctorId}/reviews/${review.id}`);
      },
      goToReviews: () => {
        go(`/${params.doctorId}`);
      },
      offsetHeight,
      removeReview,
      review: reviewsById[params.reviewId],
      reviewsById,
      updateReview,
    };
  };

  render() {
    const { children, doctor, offsetHeight } = this.props;
    if (!doctor.id) return null;
    const viewModel = this.createViewModel(offsetHeight);
    return (
      <div style={styles.container}>
        <Sizer>
          {({ setHeight }) => (
            <DoctorHeader
              doctor={doctor}
              setHeight={setHeight('doctorHeader')}
            />
          )}
        </Sizer>
        <div style={styles.contentContainer(offsetHeight)}>
          {children(viewModel)}
        </div>
      </div>
    );
  }
}

Doctor.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  doctor: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  offsetHeight: PropTypes.number,
  reviewsById: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const {
    doctors: { activeDoctor: doctor = {}, reviewsById = {} },
    layout: { heights: { doctorHeader = 0, search = 0 } = {} },
  } = state;
  const offsetHeight = search + doctorHeader;
  return { doctor, offsetHeight, reviewsById };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Doctor));
