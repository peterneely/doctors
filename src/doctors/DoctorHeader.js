import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DirectionsIcon from '@material-ui/icons/Directions';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash';

import { doctorHeader as styles } from './styles';

class DoctorHeader extends Component {
  componentDidMount() {
    this.trySetHeight();
  }

  componentDidUpdate() {
    this.trySetHeight();
  }

  setRef = ref => {
    if (!ref) return;
    this.headerEl = ref;
  };

  trySetHeight = () => {
    const { setHeight = () => {} } = this.props;
    if (this.headerEl) setHeight(this.headerEl.clientHeight);
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
            <Button
              aria-label="Directions"
              className={classes.fab}
              style={styles.directionsButton}
              variant="fab">
              <DirectionsIcon style={styles.directionsIcon} />
            </Button>
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
