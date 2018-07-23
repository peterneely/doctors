import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import MasterDetail from '../layout/MasterDetail';
import DoctorListItems from './DoctorListItems';
import SearchListItems from '../layout/SearchListItems';

class Doctors extends Component {
  constructor(props) {
    super(props);
    props.actions.getDoctors();
  }

  render() {
    const { actions = {}, activeDoctor, children, doctorsById } = this.props;
    const { setActiveDoctor = () => {} } = actions;
    return (
      <MasterDetail
        listItems={
          <DoctorListItems
            activeDoctor={activeDoctor}
            doctorsById={doctorsById}
            setActiveDoctor={setActiveDoctor}
          />
        }
        search={
          <SearchListItems
            placeholder="Search doctors by name"
            title="Doctors"
          />
        }>
        <div>{children}</div>
      </MasterDetail>
    );
  }
}

Doctors.propTypes = {
  actions: PropTypes.object.isRequired,
  activeDoctor: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  doctorsById: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    doctors: { activeDoctor = {}, doctorsById = {} },
  } = state;
  return { activeDoctor, doctorsById };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctors);
