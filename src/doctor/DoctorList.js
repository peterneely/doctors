import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class DoctorList extends Component {
  content = (() => {
    return {
      render: () => {
        return <div>DoctorList</div>;
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

DoctorList.propTypes = {};

export default DoctorList;
