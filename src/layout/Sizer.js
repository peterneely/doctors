import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

class Sizer extends Component {
  setHeight = layoutAreaName => ref => {
    if (!layoutAreaName || !ref) return;
    const { actions: { setHeight = () => {} } = {} } = this.props;
    setHeight({ height: ref.clientHeight, layoutAreaName });
  };

  render() {
    return (
      <Fragment>{this.props.children({ setHeight: this.setHeight })}</Fragment>
    );
  }
}

Sizer.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  null,
  mapDispatchToProps,
)(Sizer);
