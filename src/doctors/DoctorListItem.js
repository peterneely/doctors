import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import SmallChip from '../layout/SmallChip';
import { doctorListItem as styles } from './styles';

class DoctorListItem extends Component {
  handleClick = doctor => () => {
    const { onClick } = this.props;
    return onClick(doctor);
  };

  render() {
    const { active, classes, doctor = {} } = this.props;
    const {
      addressLine1,
      avatar,
      chipType,
      displayName,
      id,
      practiceType,
      ratingSummary,
      reviewCount,
    } = doctor;
    return (
      <ListItem
        button
        key={id}
        onClick={this.handleClick(doctor)}
        style={styles.container(active)}>
        <Avatar
          alt={displayName}
          className={classes.bigAvatar}
          id="js-avatar"
          src={avatar}
        />
        <ListItemText style={styles.textContainer}>
          <div id="js-display-name" style={styles.displayName}>
            {displayName}
          </div>
          <SmallChip
            id="js-rating-summary"
            label={ratingSummary}
            type={chipType}
          />
          <span id="js-practice-type" style={styles.practiceType}>
            {practiceType}
          </span>
          <div style={styles.text}>
            <div id="js-address">{addressLine1}</div>
            <div id="js-review-count">{`${reviewCount} Reviews`}</div>
          </div>
        </ListItemText>
        <ArrowIcon style={styles.arrowIcon} />
      </ListItem>
    );
  }
}

DoctorListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(DoctorListItem);
