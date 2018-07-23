import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

class ScrollRestore extends Component {
  handleScroll = event => {
    const { actions = {}, storeKey } = this.props;
    const { setScrollPosition = () => {} } = actions;
    const position = event.target.scrollTop;
    setScrollPosition(storeKey, position);
  };

  setRef = ref => {
    if (!ref) return;
    const { scrollPosition } = this.props;
    ref.scrollTop = scrollPosition || 0;
    ref.onscroll = this.handleScroll;
  };

  render() {
    const { children, style = {} } = this.props;
    return (
      <div ref={this.setRef} style={style}>
        {children}
      </div>
    );
  }
}

ScrollRestore.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  scrollPosition: PropTypes.number,
  storeKey: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const {
    layout: { [props.storeKey]: scrollPosition },
  } = state;
  return { scrollPosition };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScrollRestore);
