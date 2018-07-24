import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { roundIconButton as styles } from './styles';

const RoundIconButton = props => {
  const {
    ariaLabel = '',
    children,
    classes,
    onClick: handleClick = () => {},
  } = props;
  return (
    <Button
      aria-label={ariaLabel}
      className={classes.fab}
      onClick={handleClick}
      style={styles.icon}
      variant="fab">
      {children}
    </Button>
  );
};

RoundIconButton.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default withStyles(styles)(RoundIconButton);
