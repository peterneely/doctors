import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../theme';
import { smallChip as styles } from './styles';

const SmallChip = ({ label, type }) => {
  const color = colors[type] || colors.cool;
  return <span style={styles(color)}>{label}</span>;
};

SmallChip.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string, // cool, medium, or hot
};

export default SmallChip;
