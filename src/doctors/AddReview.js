import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddReview extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>AddReview</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

AddReview.propTypes = {};

export default AddReview;
