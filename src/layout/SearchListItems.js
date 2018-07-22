import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

import './search-list-items.css';
import * as actions from './actions';
import { searchListItems as styles } from './styles';

const SearchListItems = props => {
  const { actions = {}, placeholder = '', searchTerms, title } = props;
  const { setSearchTerms = () => {} } = actions;
  const handleSearch = event => setSearchTerms(event.target.value);
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <div style={styles.inputContainer}>
        <SearchIcon style={styles.icon} />
        <Input
          className="search-input"
          disableUnderline
          onChange={handleSearch}
          placeholder={placeholder}
          style={styles.input}
          value={searchTerms}
        />
      </div>
    </div>
  );
};

SearchListItems.propTypes = {
  actions: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  searchTerms: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  const {
    layout: { searchTerms = '' },
  } = state;
  return { searchTerms };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchListItems);
