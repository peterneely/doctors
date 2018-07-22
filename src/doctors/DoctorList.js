import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DoctorListItem from './DoctorListItem';
import ListItems from '../layout/ListItems';
import history from '../history';
import { rootPath } from './Routes';

class DoctorList extends Component {
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
    const { activeDoctor, doctorsById, setActiveDoctor } = this.props;
    return (
      <ListItems
        activeItem={activeDoctor}
        itemsById={doctorsById}
        renderItem={this.renderDoctorListItem}
        setActiveItem={setActiveDoctor}
      />
    );
  }
}

DoctorList.propTypes = {
  activeDoctor: PropTypes.object.isRequired,
  doctorsById: PropTypes.object,
  setActiveDoctor: PropTypes.func.isRequired,
};

export default DoctorList;
