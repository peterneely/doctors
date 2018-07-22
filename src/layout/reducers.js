import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.SET_MESSAGE:
      return {
        ...state,
        message: payload.message,
        messageType: payload.messageType,
      };
    case types.SET_SEARCH_TERMS:
      return { ...state, searchTerms: payload };
    default:
      return state;
  }
}
