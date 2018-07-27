import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { loading as styles } from './styles';

const Loading = ({ show }) =>
  !show ? null : (
    <div style={styles.container}>
      <CircularProgress size={50} />
    </div>
  );

Loading.propTypes = {
  show: PropTypes.bool,
};

export default Loading;
