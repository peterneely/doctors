import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import MasterDetail from '../layout/MasterDetail';
import DoctorList from './DoctorList';
import SearchListItems from '../layout/SearchListItems';

class Doctors extends Component {
  constructor(props) {
    super(props);
    props.actions.getDoctors();
  }

  render() {
    const { children, doctorsById } = this.props;
    return (
      <MasterDetail
        itemList={<DoctorList doctorsById={doctorsById} />}
        search={
          <SearchListItems
            placeholder="Search doctors by name"
            title="SearchDoctors"
          />
        }>
        <div>{children}</div>
      </MasterDetail>
    );
  }
}

Doctors.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  doctorsById: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    doctors: { doctorsById = {} },
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
