import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import { labeledInput as styles } from './styles';

class LabeledInput extends Component {
  renderCheckmark = ({ valid: show }) => (
    <CheckIcon style={styles.checkIcon(show)} />
  );

  render() {
    const {
      classes,
      label,
      multiline,
      onChange: handleChange,
      rows = 1,
      value = '',
    } = this.props;
    return (
      <div style={styles.inputContainer}>
        <span style={styles.inputLabel}>{label}</span>
        <Input
          className={classes.input}
          disableUnderline
          fullWidth
          inputProps={styles.inputProps}
          multiline={multiline}
          onChange={handleChange}
          rows={rows}
          value={value}
        />
        {this.renderCheckmark({ valid: !!value })}
      </div>
    );
  }
}

LabeledInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(LabeledInput);
