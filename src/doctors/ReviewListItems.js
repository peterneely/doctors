import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import ReviewListItem from './ReviewListItem';
import ScrollRestore from '../layout/ScrollRestore';
import { reviewListItems as styles } from './styles';

class ReviewListItems extends Component {
  render() {
    const {
      classes,
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
          <Button
            aria-label="Leave review"
            className={classes.button}
            fullWidth
            onClick={handleAddReview}
            style={styles.reviewButton}
            variant="contained">
            <span style={styles.reviewButtonLabel}>Leave review</span>
            <ArrowIcon />
          </Button>
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
