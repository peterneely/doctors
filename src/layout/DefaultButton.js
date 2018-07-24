import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class DefaultButton extends Component {
  render() {
    const {
      ariaLabel = '',
      children,
      classes = {},
      disabled,
      fullWidth,
      label = '',
      onClick: handleClick = () => {},
      styles = {},
    } = this.props;
    return (
      <Button
        aria-label={ariaLabel}
        className={classes.button}
        disabled={disabled}
        fullWidth={fullWidth}
        onClick={handleClick}
        style={styles.buttonLabel}
        variant="contained">
        <span style={styles.buttonChildren}>{label}</span>
        {children}
      </Button>
    );
  }
}

DefaultButton.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.object,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.object.isRequired,
};

export default DefaultButton;
