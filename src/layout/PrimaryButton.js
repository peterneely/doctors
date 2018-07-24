import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DefaultButton from './DefaultButton';
import { colors } from '../theme';
import { defaultButton as commonClassStyles } from './styles';

const classStyles = {
  button: {
    ...commonClassStyles,
    '&:hover': { backgroundColor: colors.buttonSecondaryHover },
    backgroundColor: colors.buttonSecondary,
  },
};

const styles = {
  buttonChildren: { paddingRight: 10 },
  buttonLabel: { color: 'white' },
};

const PrimaryButton = ({ children, ...rest }) => {
  const props = { ...rest, fullWidth: true, styles };
  return <DefaultButton {...props}>{children}</DefaultButton>;
};

PrimaryButton.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.object,
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default withStyles(classStyles)(PrimaryButton);
