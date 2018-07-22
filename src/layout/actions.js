import * as types from './types';

export const setMessage = ({ details, message, messageType }) => dispatch => {
  dispatch({ payload: { message, messageType }, type: types.SET_MESSAGE });
  // Can log details (errors) to some logging service.
};

export const setSearchTerms = searchTerms => ({
  payload: searchTerms,
  type: types.SET_SEARCH_TERMS,
});
