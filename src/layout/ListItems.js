import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import List from '@material-ui/core/List';
import _ from 'lodash';

import { listItems as styles } from './styles';

class ListItems extends Component {
  componentDidUpdate(prevProps) {
    this.trySetActiveItem(prevProps);
  }

  filterItems = () => {
    const { itemsById, searchTerms } = this.props;
    return _.map(itemsById).filter(({ searchableTerms }) =>
      searchableTerms.includes(searchTerms.toLowerCase()),
    );
  };

  trySetActiveItem = prevProps => {
    const { activeItem: prevActiveItem = {} } = prevProps;
    const {
      itemsById,
      match: { params = {} },
      setActiveItem = () => {},
    } = this.props;
    if (params.id === prevActiveItem.id) return;
    setActiveItem(itemsById[params.id]);
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
  activeItem: PropTypes.object.isRequired,
  itemsById: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
  searchTerms: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const {
    layout: { searchTerms = '' },
    match = {},
  } = state;
  return { match, searchTerms };
};

export default connect(mapStateToProps)(withRouter(ListItems));
