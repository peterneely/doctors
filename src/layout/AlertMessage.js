import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

class MasterDetail extends Component {
  state = { alertOpen: false };

  componentDidUpdate(prevProps) {
    this.tryShow(prevProps);
  }

  handleClose = () => {
    this.setState({ alertOpen: false });
  };

  tryShow = prevProps => {
    if (this.props.message === prevProps.message) return;
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
  message: PropTypes.string,
  messageType: PropTypes.string,
};

const mapStateToProps = state => {
  const {
    layout: { message = '', messageType = '' },
  } = state;
  return { message, messageType };
};

export default connect(mapStateToProps)(MasterDetail);
