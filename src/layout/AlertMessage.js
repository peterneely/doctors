import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

import * as actions from './actions';

class MasterDetail extends Component {
  state = { alertOpen: false };

  componentDidUpdate(prevProps) {
    this.tryShow(prevProps);
  }

  handleClose = () => {
    this.setState({ alertOpen: false });
    setTimeout(this.props.actions.clearMessage, 1000);
  };

  tryShow = prevProps => {
    if (!this.props.message || prevProps.message) return;
    this.setState({ alertOpen: true });
  };

  render() {
    const { message } = this.props;
    const { alertOpen } = this.state;
    return (
      <Snackbar
        ContentProps={{ 'aria-describedby': 'message-id' }}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="secondary"
            onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        message={<span id="message-id">{message}</span>}
        onClose={this.handleClose}
        open={alertOpen}
      />
    );
  }
}

MasterDetail.propTypes = {
  actions: PropTypes.object.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.string,
};

const mapStateToProps = state => {
  const {
    layout: { message = '', messageType = '' },
  } = state;
  return { message, messageType };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterDetail);
