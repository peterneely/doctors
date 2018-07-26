import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import AlertMessage from './AlertMessage';
import LayoutHeight from './LayoutHeight';
import Loading from './Loading';
import { masterDetail as styles } from './styles';

const MasterDetail = props => {
  const {
    children,
    layoutHeight,
    listItems: ListItems,
    listItemsLoading,
    search: Search,
  } = props;
  const loadingHeight = _.isNumber(layoutHeight)
    ? layoutHeight - layoutHeight * 0.2
    : layoutHeight;
  return (
    <div style={styles.container}>
      {Search}
      <LayoutHeight offset={100} />
      <Loading height={loadingHeight} show={listItemsLoading} />
      <div style={styles.contentContainer}>
        {ListItems}
        <div style={styles.detailContainer}>{children}</div>
      </div>
      <AlertMessage />
    </div>
  );
};

MasterDetail.propTypes = {
  children: PropTypes.node.isRequired,
  layoutHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  listItems: PropTypes.node.isRequired,
  listItemsLoading: PropTypes.bool,
  search: PropTypes.node.isRequired,
};

export default MasterDetail;
