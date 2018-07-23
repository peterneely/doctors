import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import DoctorListItems from './DoctorListItems';
import MasterDetail from '../layout/MasterDetail';
import SearchListItems from '../layout/SearchListItems';

class Doctors extends Component {
  constructor(props) {
    super(props);
    props.actions.getDoctors();
  }

  render() {
    const {
      actions = {},
      activeDoctor,
      children,
      doctorsById,
      match,
    } = this.props;
    const { setActiveDoctor = () => {} } = actions;
    return (
      <Fragment>
        <MasterDetail
          listItems={
            <DoctorListItems
              activeDoctor={activeDoctor}
              doctorsById={doctorsById}
              match={match}
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
      </Fragment>
    );
  }
}

Doctors.propTypes = {
  actions: PropTypes.object.isRequired,
  activeDoctor: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  doctorsById: PropTypes.object,
  match: PropTypes.object.isRequired,
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
