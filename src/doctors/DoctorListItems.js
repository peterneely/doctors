import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import DoctorListItem from './DoctorListItem';
import ListItems from '../layout/ListItems';
import history from '../history';
import { rootPath } from './Routes';
import { doctorListItems as styles } from './styles';

class DoctorListItems extends Component {
  handleSelectDoctor = doctor => {
    this.props.setActiveDoctor(doctor);
    history.push(`${rootPath}/${doctor.id}`);
  };

  renderDoctorListItem = doctor => {
    const { activeDoctor } = this.props;
    return (
      <DoctorListItem
        active={doctor.id === activeDoctor.id}
        doctor={doctor}
        key={doctor.id}
        onClick={this.handleSelectDoctor}
      />
    );
  };

  render() {
    const { activeDoctor, doctorsById, match, setActiveDoctor } = this.props;
    const { params } = match;
    const showRightBorder = !!_.size(doctorsById) && !params.id;
    return (
      <ListItems
        activeItem={activeDoctor}
        itemsById={doctorsById}
        renderItem={this.renderDoctorListItem}
        setActiveItem={setActiveDoctor}
        style={styles.container(showRightBorder)}
      />
    );
  }
}

DoctorListItems.propTypes = {
  activeDoctor: PropTypes.object.isRequired,
  doctorsById: PropTypes.object,
  match: PropTypes.object.isRequired,
  setActiveDoctor: PropTypes.func.isRequired,
};

export default DoctorListItems;
