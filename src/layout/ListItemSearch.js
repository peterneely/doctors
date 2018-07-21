import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './list-item-search.css';
import { listItemSearch as styles } from './styles';

const ListItemSearch = props => {
  const { onSearch: handleSearch, placeholder = '', title } = props;
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <div style={styles.inputContainer}>
        <span />
        <TextField
          className="search-input"
          onChange={handleSearch}
          placeholder={placeholder}
          style={styles.input}
        />
      </div>
    </div>
  );
};

ListItemSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ListItemSearch;
