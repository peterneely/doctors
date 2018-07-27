import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from './actions';
import DoctorListItems from './DoctorListItems';
import MasterDetail from '../layout/MasterDetail';
import SearchListItems from '../layout/SearchListItems';

export class Doctors extends Component {
  constructor(props) {
    super(props);
    props.actions.getDoctors();
  }

  hasDetail = () => {
    const { params } = this.props.match;
    return !!params.doctorId;
  };

  render() {
    const {
      actions = {},
      activeDoctor,
      children,
      doctorsById,
      layoutHeight,
      loading,
    } = this.props;
    const { setActiveDoctor = () => {} } = actions;
    return (
      <Fragment>
        <MasterDetail
          layoutHeight={layoutHeight}
          listItems={
            <DoctorListItems
              activeDoctor={activeDoctor}
              doctorsById={doctorsById}
              hasDetail={this.hasDetail}
              setActiveDoctor={setActiveDoctor}
            />
          }
          listItemsLoading={loading}
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
  layoutHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const {
    doctors: { activeDoctor = {}, doctorsById = {} },
    layout: { height: layoutHeight },
  } = state;
  const loading = !_.size(doctorsById);
  return { activeDoctor, doctorsById, layoutHeight, loading };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctors);
