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
      avatar,
      chipType,
      displayName,
      id,
      location: { street },
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
        <Avatar alt={displayName} className={classes.bigAvatar} src={avatar} />
        <ListItemText style={styles.textContainer}>
          <div style={styles.displayName}>{displayName}</div>
          <SmallChip label={ratingSummary} type={chipType} />
          <span style={styles.practiceType}>{practiceType}</span>
          <div style={styles.text}>
            <div>{street}</div>
            <div>{`${reviewCount} Reviews`}</div>
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
