import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import DoctorListItem from './DoctorListItem';
import ListItemSearch from '../layout/ListItemSearch';
import ListItems from '../layout/ListItems';
import history from '../history';
import { doctors as styles } from './styles';
import { rootPath } from './Routes';

class Doctors extends Component {
  constructor(props) {
    super(props);
    props.actions.getDoctors();
  }

  handleSearch = event => {};

  handleSelectDoctor = ({ id }) => history.push(`${rootPath}/${id}`);

  renderDoctor = doctor => (
    <DoctorListItem
      doctor={doctor}
      key={doctor.id}
      onClick={this.handleSelectDoctor}
    />
  );

  render() {
    const { children, doctorsById = {} } = this.props;
    return (
      <div style={styles.container}>
        <ListItemSearch
          onSearch={this.handleSearch}
          placeholder="Search doctors by name"
          title="Doctors"
        />
        <div style={styles.contentContainer}>
          <ListItems itemsById={doctorsById} renderItem={this.renderDoctor} />
          <div>{children}</div>
        </div>
      </div>
    );
  }
}

Doctors.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.node.isRequired,
  doctorsById: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    doctors: { doctorsById },
  } = state;
  return { doctorsById };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctors);
