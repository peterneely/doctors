import * as types from './types';

export const clearMessage = () => ({ type: types.CLEAR_MESSAGE });

export const setLayoutHeight = height => ({
  payload: height,
  type: types.SET_LAYOUT_HEIGHT,
});

export const setMessage = ({ details, message, messageType }) => {
  return (dispatch, getState) => {
    const { layout: { message: prevMessage } = {} } = getState();
    if (prevMessage) return;
    dispatch({
      payload: { message, messageType },
      type: types.SET_MESSAGE,
    });
    // Can log details (errors) to some logging service.
  };
};

export const setScrollPosition = (key, position) => ({
  payload: { key, position },
  type: types.SET_SCROLL_POSITION,
});

export const setSearchTerms = searchTerms => ({
  payload: searchTerms,
  type: types.SET_SEARCH_TERMS,
});
