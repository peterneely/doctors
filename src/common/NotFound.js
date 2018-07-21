import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotFound extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>404</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

NotFound.propTypes = {};

export default NotFound;
