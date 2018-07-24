import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import PrimaryButton from '../layout/PrimaryButton';
import ReviewListItem from './ReviewListItem';
import ScrollRestore from '../layout/ScrollRestore';
import { reviewListItems as styles } from './styles';

class ReviewListItems extends Component {
  render() {
    const {
      contentHeight,
      onAddReview: handleAddReview,
      onEditReview: handleEditReview,
      reviewsById = {},
    } = this.props;
    const reviews = _.chain(reviewsById)
      .map()
      .take(20)
      .orderBy(['order'], ['desc'])
      .value();
    return (
      <div style={styles.container}>
        <ScrollRestore
          id="doctorReviews"
          style={styles.reviewsContainer(contentHeight)}>
          {reviews.map(review => (
            <ReviewListItem
              key={review.id}
              review={review}
              onEdit={handleEditReview}
            />
          ))}
        </ScrollRestore>
        <div style={styles.commandContainer}>
          <PrimaryButton
            ariaLabel="Leave review"
            fullWidth
            label="Leave review"
            onClick={handleAddReview}>
            <ArrowIcon />
          </PrimaryButton>
          <div style={styles.commandMargin} />
        </div>
      </div>
    );
  }
}

ReviewListItems.propTypes = {
  classes: PropTypes.object.isRequired,
  contentHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAddReview: PropTypes.func.isRequired,
  onEditReview: PropTypes.func.isRequired,
  reviewsById: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewListItems);
