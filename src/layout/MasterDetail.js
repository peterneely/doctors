import React from 'react';
import PropTypes from 'prop-types';

import AlertMessage from './AlertMessage';
import Loading from './Loading';
import { masterDetail as styles } from './styles';

const MasterDetail = props => {
  const {
    children,
    listItems: ListItems,
    listItemsLoading,
    topNav: TopNav,
  } = props;
  return (
    <div style={styles.container}>
      {TopNav}
      <Loading show={listItemsLoading} />
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
  listItems: PropTypes.node.isRequired,
  listItemsLoading: PropTypes.bool,
  topNav: PropTypes.node.isRequired,
};

export default MasterDetail;
