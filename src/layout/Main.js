import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>Main</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

// Main.propTypes = {

// };

export default Main;
