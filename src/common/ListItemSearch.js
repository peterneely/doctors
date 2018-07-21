import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItemSearch extends Component {
  content = (() => {
    return {
      render: () => {
        // const { ListItemSearch } = this.props;
        return <div>ListItemSearch</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

ListItemSearch.propTypes = {
  // ListItemSearch: PropTypes.func.isRequired,
};

export default ListItemSearch;
