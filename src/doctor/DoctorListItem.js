import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import * as actions from './actions';
import ListItemSearch from '../layout/ListItemSearch';
import ListItems from '../layout/ListItems';
import history from '../history';
import { rootPath } from './Routes';
import { doctors as styles } from './styles';

class DoctorListItem extends Component {
  render() {
    const { doctor, onClick } = this.props;
    const {
      id,
      name: { first: firstName },
    } = doctor;
    const handleClick = doctor => () => onClick(doctor);
    return (
      <ListItem button key={id} onClick={handleClick(doctor)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={firstName} />
      </ListItem>
    );
  }
}

DoctorListItem.propTypes = {
  doctor: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorListItem;
