import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.CLEAR_MESSAGE:
      return { ...state, message: '', messageType: '' };
    case types.SET_LAYOUT_HEIGHT:
      return { ...state, height: payload };
    case types.SET_MESSAGE:
      return {
        ...state,
        message: payload.message,
        messageType: payload.messageType,
      };
    case types.SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPositions: {
          ...state.scrollPositions,
          [payload.id]: payload.position,
        },
      };
    case types.SET_SEARCH_TERMS:
      return { ...state, searchTerms: payload };
    default:
      return state;
  }
}
