import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';

import './search-list-items.css';
import * as actions from './actions';
import { listItemSearch as styles } from './styles';

const SearchListItems = props => {
  const { actions = {}, placeholder = '', searchTerms, title } = props;
  const { setSearchTerms = () => {} } = actions;
  const handleSearch = event => setSearchTerms(event.target.value);
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <div style={styles.inputContainer}>
        <span />
        <Input
          className="search-input"
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
