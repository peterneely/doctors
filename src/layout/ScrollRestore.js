import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

class ScrollRestore extends Component {
  handleScroll = event => {
    const { actions = {}, id } = this.props;
    const { setScrollPosition = () => {} } = actions;
    const position = event.target.scrollTop;
    setScrollPosition(id, position);
  };

  init = ref => {
    if (!ref) return;
    const { scrollPosition } = this.props;
    ref.scrollTop = scrollPosition || 0;
    ref.onscroll = this.handleScroll;
  };

  render() {
    const { children, style = {} } = this.props;
    return (
      <div ref={this.init} style={style}>
        {children}
      </div>
    );
  }
}

ScrollRestore.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  scrollPosition: PropTypes.number,
  style: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const {
    layout: { scrollPositions: { [props.id]: scrollPosition } = {} },
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
