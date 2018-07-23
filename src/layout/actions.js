import * as types from './types';

export const clearMessage = () => ({ type: types.CLEAR_MESSAGE });

export const setLayoutHeight = height => ({
  payload: height,
  type: types.SET_LAYOUT_HEIGHT,
});

export const setMessage = ({ details, message, messageType }) => {
  // Can log details (errors) to some logging service.
  return (dispatch, getState) => {
    const { layout: { message: prevMessage } = {} } = getState();
    if (prevMessage) return;
    dispatch({
      payload: { message, messageType },
      type: types.SET_MESSAGE,
    });
  };
};

export const setScrollPosition = (id, position) => ({
  payload: { id, position },
  type: types.SET_SCROLL_POSITION,
});

export const setSearchTerms = searchTerms => ({
  payload: searchTerms,
  type: types.SET_SEARCH_TERMS,
});
