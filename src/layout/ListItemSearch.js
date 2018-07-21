import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { withStyles } from '@material-ui/core/styles';
import './list-item-search.css';

class ListItemSearch extends Component {
  content = (() => {
    const styles = {
      containerStyle: {
        background: 'linear-gradient(to right, #191A52 , #27466A)',
        display: 'flex',
        padding: '28px 42px',
      },
      inputContainerStyle: {
        display: 'flex',
        width: '100%',
      },
      inputStyle: {
        backgroundColor: 'white',
        border: 'none',
        height: 44,
        marginLeft: 42,
        width: '100%',
      },
      titleStyle: { color: 'white', fontSize: '2.5em', fontWeight: 'lighter' },
    };
    return {
      render: () => {
        const { onSearch: handleSearch, placeholder = '', title } = this.props;
        return (
          <div style={styles.containerStyle}>
            <div style={styles.titleStyle}>{title}</div>
            <div style={styles.inputContainerStyle}>
              <span />
              <TextField
                className="search-input"
                onChange={handleSearch}
                placeholder={placeholder}
                style={styles.inputStyle}
              />
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

ListItemSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ListItemSearch;
