import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import ReviewListItem from './ReviewListItem';
import { reviewListItems as styles } from './styles';

class ReviewListItems extends Component {
  getContainerHeight = () => {
    const { headerHeight = 0, layoutHeight } = this.props;
    return _.isNumber(layoutHeight) ? layoutHeight - headerHeight : 'auto';
  };

  render() {
    const { classes, reviewsById = {} } = this.props;
    const height = this.getContainerHeight();
    const sortedReviews = _.orderBy(_.map(reviewsById), ['order'], ['desc']);
    return (
      <div style={styles.container}>
        <div style={styles.reviewsContainer(height)}>
          {sortedReviews.map(review => (
            <ReviewListItem key={review.id} review={review} />
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
  headerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  layoutHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  reviewsById: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewListItems);
