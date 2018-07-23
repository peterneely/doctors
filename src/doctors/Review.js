import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import { review as styles } from './styles';

class Review extends Component {
  render() {
    const { classes, onCancel: handleCancel, review = {} } = this.props;
    return (
      <div>
        {_.size(review) ? 'Edit Review' : 'Add Review'}
        {review.name}
        <Button className={classes.button} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  review: PropTypes.object,
};

export default withStyles(styles)(Review);
