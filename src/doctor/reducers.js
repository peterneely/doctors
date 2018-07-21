// import _ from 'lodash';
import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.SET_DOCTOR_LIST:
      return { ...state, list: payload };
    default:
      return state;
  }
}
