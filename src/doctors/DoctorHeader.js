import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DirectionsIcon from '@material-ui/icons/Directions';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash';

import RoundIconButton from '../layout/RoundIconButton';
import { doctorHeader as styles } from './styles';

class DoctorHeader extends Component {
  componentDidUpdate() {
    this.setHeight();
  }

  setHeight = () => {
    if (!this.headerEl) return;
    const { setHeight = () => {} } = this.props;
    setHeight(this.headerEl.clientHeight);
  };

  setRef = ref => {
    if (!ref) return;
    this.headerEl = ref;
    this.setHeight();
  };

  render() {
    const { classes, doctor = {} } = this.props;
    if (!_.size(doctor)) return null;
    const {
      addressLine1,
      addressLine2,
      avatar,
      displayName,
      practiceType,
      reviewCount,
    } = doctor;
    return (
      <div ref={this.setRef}>
        <ListItem style={styles.container}>
          <Avatar
            alt={displayName}
            className={classes.bigAvatar}
            src={avatar}
          />
          <div style={styles.mainContainer}>
            <ListItemText>
              <div style={styles.title}>{displayName}</div>
              <div style={styles.practiceType}>{practiceType}</div>
              <div style={styles.reviewCount}>{`${reviewCount} Reviews`}</div>
            </ListItemText>
            <RoundIconButton ariaLabel="Directions">
              <DirectionsIcon style={styles.directionsIcon} />
            </RoundIconButton>
          </div>
          <ListItemText style={styles.addressContainer}>
            <div style={styles.addressLabel}>ADDRESS</div>
            <div style={styles.address}>{addressLine1}</div>
            <div style={styles.address}>{addressLine2}</div>
          </ListItemText>
        </ListItem>
      </div>
    );
  }
}

DoctorHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
  setHeight: PropTypes.func.isRequired,
};

export default withStyles(styles)(DoctorHeader);
