import React from 'react';
import PropTypes from 'prop-types';

import AlertMessage from './AlertMessage';
import { masterDetail as styles } from './styles';

const MasterDetail = props => {
  const { children, itemList: ItemList, search: Search } = props;
  return (
    <div style={styles.container}>
      {Search}
      <div style={styles.contentContainer}>
        {ItemList}
        <div>{children}</div>
      </div>
      <AlertMessage />
    </div>
  );
};

MasterDetail.propTypes = {
  children: PropTypes.node.isRequired,
  itemList: PropTypes.node.isRequired,
  search: PropTypes.node.isRequired,
};

export default MasterDetail;
