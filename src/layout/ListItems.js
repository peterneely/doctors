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
    const { activeItem = {}, idParamProp } = this.props;
    const {
      itemsById,
      match: { params = {} },
      setActiveItem = () => {},
    } = this.props;
    const paramId = params[idParamProp];
    if (!_.size(itemsById) || paramId === activeItem.id) return;
    setActiveItem(itemsById[paramId]);
  };

  render() {
    const { height, renderItem, scrollPositionId, style = {} } = this.props;
    return (
      <ScrollRestore
        id={scrollPositionId}
        style={{ ...styles.container(height), ...style }}>
        <List style={styles.listContainer}>
          {this.filterItems().map(renderItem)}
        </List>
      </ScrollRestore>
    );
  }
}

ListItems.propTypes = {
  activeItem: PropTypes.object.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  idParamProp: PropTypes.string.isRequired,
  itemsById: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
  scrollPositionId: PropTypes.string.isRequired,
  searchTerms: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    layout: { height = 'auto', searchTerms = '' },
    match = {},
  } = state;
  return { height, match, searchTerms };
};

export default connect(mapStateToProps)(withRouter(ListItems));
