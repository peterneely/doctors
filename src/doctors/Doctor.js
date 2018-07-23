import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import * as actions from './actions';
import DoctorHeader from './DoctorHeader';
import { doctor as styles } from './styles';
import { go } from './Routes';

class Doctor extends Component {
  state = { headerHeight: 0 };

  calcContentHeight = () => {
    const { height: layoutHeight } = this.props;
    const { headerHeight } = this.state;
    return _.isNumber(layoutHeight) ? layoutHeight - headerHeight : 'auto';
  };

  setHeaderHeight = headerHeight => {
    const { headerHeight: prevHeight } = this.state;
    if (headerHeight !== prevHeight) this.setState({ headerHeight });
  };

  render() {
    const {
      children,
      doctor,
      match: { params },
      reviewsById,
    } = this.props;
    if (!doctor.id) return null;
    const contentHeight = this.calcContentHeight();
    const viewModel = {
      contentHeight,
      goToNewReview: review => {
        go(`/${params.doctorId}/add-review`);
      },
      goToReview: review => {
        go(`/${params.doctorId}/reviews/${review.id}`);
      },
      goToReviews: () => {
        go(`/${params.doctorId}`);
      },
      review: reviewsById[params.reviewId],
      reviewsById,
    };
    return (
      <div style={styles.container}>
        <DoctorHeader doctor={doctor} setHeight={this.setHeaderHeight} />
        <div style={styles.contentContainer(contentHeight)}>
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
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  match: PropTypes.object.isRequired,
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
)(withRouter(Doctor));
