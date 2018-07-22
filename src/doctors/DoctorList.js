import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DoctorListItem from './DoctorListItem';
import ListItems from '../layout/ListItems';
import history from '../history';
import { rootPath } from './Routes';

class DoctorList extends Component {
  handleSelectDoctor = ({ id }) => history.push(`${rootPath}/${id}`);

  renderDoctorListItem = doctor => (
    <DoctorListItem
      doctor={doctor}
      key={doctor.id}
      onClick={this.handleSelectDoctor}
    />
  );

  render() {
    const { doctorsById } = this.props;
    return (
      <ListItems
        itemsById={doctorsById}
        renderItem={this.renderDoctorListItem}
      />
    );
  }
}

DoctorList.propTypes = {
  doctorsById: PropTypes.object,
};

export default DoctorList;
