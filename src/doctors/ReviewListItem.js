import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import { reviewListItem as styles } from './styles';

class ReviewListItem extends Component {
  handleEdit = () => {
    const { onEdit, review } = this.props;
    onEdit(review);
  };

  render() {
    const { classes, review = {} } = this.props;
    if (!_.size(review)) return null;
    const { name, body, date } = review;
    return (
      <div style={styles.container}>
        <div style={styles.date}>{date.toString()}</div>
        <div style={styles.authorContainer}>
          <div style={styles.author}>{name}</div>
          <Button className={classes.button} onClick={this.handleEdit}>
            Edit
          </Button>
        </div>
        <div style={styles.body}>{body}</div>
      </div>
    );
  }
}

ReviewListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewListItem);
