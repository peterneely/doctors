import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Checkbox from '@material-ui/core/Checkbox';
// import InboxIcon from '@material-ui/icons/Inbox';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

// import * as actions from './actions';
// import ListItemSearch from '../layout/ListItemSearch';
// import ListItems from '../layout/ListItems';
// import history from '../history';
// import { rootPath } from './Routes';
import { doctorListItem as styles } from './styles';
import SmallChip from '../layout/SmallChip';

class DoctorListItem extends Component {
  handleClick = doctor => () => {
    const { onClick } = this.props;
    return onClick(doctor);
  };

  render() {
    const { doctor = {} } = this.props;
    const {
      id,
      name: { first: firstName, last: lastName },
      picture: { thumbnail } = {},
    } = doctor;
    const displayName = `${firstName} ${lastName}`;
    return (
      <ListItem button key={id} onClick={this.handleClick(doctor)}>
        <Avatar alt={displayName} src={thumbnail} />
        <ListItemText>
          <div style={styles.displayName}>{displayName}</div>
          <SmallChip label="High" type="hot" />
          <span style={{ ...styles.text, ...styles.practiceType }}>
            Internal Medicine
          </span>
        </ListItemText>
        {/* <ListItemSecondaryAction>
          <Checkbox
            onChange={this.handleToggle(value)}
            checked={this.state.checked.indexOf(value) !== -1}
          />
        </ListItemSecondaryAction> */}
      </ListItem>
    );
  }
}

DoctorListItem.propTypes = {
  doctor: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorListItem;
