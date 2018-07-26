import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const createStyles = height => ({
  alignItems: 'center',
  display: 'flex',
  height,
  justifyContent: 'center',
});

const Loading = ({ height, show }) =>
  !show ? null : (
    <div style={createStyles(height)}>
      <CircularProgress size={50} />
    </div>
  );

Loading.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  show: PropTypes.bool,
};

export default Loading;
