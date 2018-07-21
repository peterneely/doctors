import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Search from '../layout/Search';

class DoctorSearch extends Component {
  content = (() => {
    const searchDoctors = () => {};
    return {
      render: () => {
        return (
          <div>
            Doctors
            <Search search={searchDoctors} />
          </div>
        );
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

// DoctorSearch.propTypes = {
//   children: PropTypes.func.isRequired,
// };

export default DoctorSearch;
