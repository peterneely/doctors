import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ListItems extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>ListItems</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

ListItems.propTypes = {};

export default ListItems;
