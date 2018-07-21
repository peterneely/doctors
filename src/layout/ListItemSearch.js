import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class ListItemSearch extends Component {
  content = (() => {
    return {
      render: () => {
        // const { ListItemSearch } = this.props;
        return (
          <div>
            <AppBar position="static">
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        );
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
