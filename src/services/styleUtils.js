import _ from 'lodash';

export const fullHeight = offsetHeight =>
  _.isFinite(offsetHeight) ? `calc(100vh - ${offsetHeight}px)` : '100vh';
