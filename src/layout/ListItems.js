import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import _ from 'lodash';

import { listItems as styles } from './styles';

class ListItems extends Component {
  filterItems = () => {
    const { itemsById, searchTerms } = this.props;
    return _.map(itemsById).filter(({ searchableTerms }) =>
      searchableTerms.includes(searchTerms.toLowerCase()),
    );
  };

  render() {
    const { renderItem } = this.props;
    return (
      <div style={styles.container}>
        <List>{this.filterItems().map(renderItem)}</List>
      </div>
    );
  }
}

ListItems.propTypes = {
  itemsById: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
  searchTerms: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  const {
    layout: { searchTerms = '' },
  } = state;
  return { searchTerms };
};

export default connect(mapStateToProps)(ListItems);
