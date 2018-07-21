// import _ from 'lodash';
import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.SET_DOCTORS_BY_ID:
      return { ...state, doctorsById: payload };
    default:
      return state;
  }
}
