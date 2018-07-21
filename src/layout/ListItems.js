import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import _ from 'lodash';
import { listItems as styles } from './styles';
// import DraftsIcon from '@material-ui/icons/Drafts';

class ListItems extends Component {
  render() {
    const { itemsById, renderItem } = this.props;
    return (
      <div style={styles.container}>
        <List component="nav">
          {_.map(itemsById, (item, id) => renderItem(item, id))}
        </List>
      </div>
    );
  }
}

ListItems.propTypes = {
  itemsById: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ListItems;
