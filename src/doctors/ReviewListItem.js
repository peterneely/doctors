import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { reviewListItem as styles } from './styles';

class ReviewListItem extends Component {
  render() {
    const { review = {} } = this.props;
    const { name, body, date } = review;
    return (
      <div style={styles.container}>
        <div style={styles.date}>{date.toString()}</div>
        <div style={styles.authorContainer}>
          <div style={styles.author}>{name}</div>
          <div style={styles.edit}>Edit</div>
        </div>
        <div style={styles.body}>{body}</div>
      </div>
    );
  }
}

ReviewListItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewListItem;
