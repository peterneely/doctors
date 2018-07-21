import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemSearch from '../common/ListItemSearch';
import ListItems from '../common/ListItems';

class DoctorLayout extends Component {
  content = (() => {
    return {
      render: () => {
        const { children } = this.props;
        return (
          <div>
            <ListItemSearch />
            <div>
              <ListItems />
              {children}
            </div>
          </div>
        );
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

DoctorLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoctorLayout;
