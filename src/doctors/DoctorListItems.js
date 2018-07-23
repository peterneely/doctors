import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import DoctorListItem from './DoctorListItem';
import ListItems from '../layout/ListItems';
import { doctorListItems as styles } from './styles';
import { go } from './Routes';

class DoctorListItems extends Component {
  handleSelectDoctor = doctor => {
    this.props.setActiveDoctor(doctor);
    go(`/${doctor.id}`);
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
    const {
      activeDoctor,
      doctorsById,
      hasDetail,
      setActiveDoctor,
    } = this.props;
    const showRightBorder = !!_.size(doctorsById) && !hasDetail();
    return (
      <ListItems
        activeItem={activeDoctor}
        idParamProp="doctorId"
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
  hasDetail: PropTypes.func.isRequired,
  setActiveDoctor: PropTypes.func.isRequired,
};

export default DoctorListItems;
