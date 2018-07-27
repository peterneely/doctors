import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from './actions';
import DoctorListItems from './DoctorListItems';
import MasterDetail from '../layout/MasterDetail';
import SearchListItems from '../layout/SearchListItems';
import Sizer from '../layout/Sizer';

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
      loading,
      offsetHeight,
    } = this.props;
    const { setActiveDoctor = () => {} } = actions;
    return (
      <Sizer>
        {({ setHeight }) => (
          <MasterDetail
            listItems={
              <DoctorListItems
                activeDoctor={activeDoctor}
                doctorsById={doctorsById}
                hasDetail={this.hasDetail}
                offsetHeight={offsetHeight}
                setActiveDoctor={setActiveDoctor}
              />
            }
            listItemsLoading={loading}
            topNav={
              <SearchListItems
                placeholder="Search doctors by name"
                setHeight={setHeight('search')}
                title="Doctors"
              />
            }>
            <div>{children}</div>
          </MasterDetail>
        )}
      </Sizer>
    );
  }
}

Doctors.propTypes = {
  actions: PropTypes.object.isRequired,
  activeDoctor: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  doctorsById: PropTypes.object,
  loading: PropTypes.bool,
  match: PropTypes.object.isRequired,
  offsetHeight: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  const {
    doctors: { activeDoctor = {}, doctorsById = {} },
    layout: { heights: { search: offsetHeight = 0 } = {} } = {},
  } = state;
  const loading = !_.size(doctorsById);
  return { activeDoctor, doctorsById, loading, offsetHeight };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctors);
