import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import ReviewListItem from './ReviewListItem';
import { reviewListItems as styles } from './styles';

class ReviewListItems extends Component {
  render() {
    const {
      classes,
      contentHeight,
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
        <div style={styles.reviewsContainer(contentHeight)}>
          {reviews.map(review => (
            <ReviewListItem
              key={review.id}
              review={review}
              onEdit={handleEditReview}
            />
          ))}
        </div>
        <div style={styles.commandContainer}>
          <Button
            aria-label="Leave review"
            className={classes.button}
            fullWidth
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
  onEditReview: PropTypes.func.isRequired,
  reviewsById: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewListItems);
