import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

class LayoutHeight extends Component {
  componentDidMount() {
    this.setHeight();
    window.addEventListener('resize', this.setHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight);
  }

  setHeight = () => {
    const { actions = {}, height: prevHeight, offset = 0 } = this.props;
    const { setLayoutHeight = () => {} } = actions;
    const height = window.innerHeight - offset;
    if (height !== prevHeight) setLayoutHeight(height);
  };

  render() {
    return <Fragment />;
  }
}

LayoutHeight.propTypes = {
  actions: PropTypes.object.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.number,
};

const mapStateToProps = state => {
  const {
    layout: { height },
  } = state;
  return { height };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutHeight);
