import React from 'react';
import PropTypes from 'prop-types';

import AlertMessage from './AlertMessage';
import LayoutHeight from './LayoutHeight';
import { masterDetail as styles } from './styles';

const MasterDetail = props => {
  const { children, listItems: ListItems, search: Search } = props;
  return (
    <div style={styles.container}>
      {Search}
      <LayoutHeight offset={100} />
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
  search: PropTypes.node.isRequired,
};

export default MasterDetail;
