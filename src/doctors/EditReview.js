import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class EditReview extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>EditReview</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

EditReview.propTypes = {};

export default EditReview;
