import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import List from '@material-ui/core/List';
import _ from 'lodash';

import ScrollRestore from '../layout/ScrollRestore';
import { listItems as styles } from './styles';

class ListItems extends Component {
  componentDidUpdate() {
    this.trySetActiveItem();
  }

  filterItems = () => {
    const { itemsById, searchTerms } = this.props;
    return _.map(itemsById).filter(({ searchableTerms }) =>
      searchableTerms.includes(searchTerms.toLowerCase()),
    );
  };

  trySetActiveItem = () => {
    const {
      activeItem = {},
      idParamProp,
      itemsById,
      match: { params = {} },
      setActiveItem = () => {},
    } = this.props;
    const paramId = params[idParamProp];
    if (!_.size(itemsById) || paramId === activeItem.id) return;
    setActiveItem(itemsById[paramId]);
  };

  render() {
    const {
      offsetHeight = 0,
      renderItem,
      scrollPositionId,
      style = {},
    } = this.props;
    return (
      <ScrollRestore
        id={scrollPositionId}
        style={{ ...styles.container(offsetHeight), ...style }}>
        <List style={styles.listContainer}>
          {this.filterItems().map(renderItem)}
        </List>
      </ScrollRestore>
    );
  }
}

ListItems.propTypes = {
  activeItem: PropTypes.object.isRequired,
  idParamProp: PropTypes.string.isRequired,
  itemsById: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  offsetHeight: PropTypes.number,
  renderItem: PropTypes.func.isRequired,
  scrollPositionId: PropTypes.string.isRequired,
  searchTerms: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    layout: { searchTerms = '' },
    match = {},
  } = state;
  return { match, searchTerms };
};

export default connect(mapStateToProps)(withRouter(ListItems));
