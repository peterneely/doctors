import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.SET_ACTIVE_DOCTOR:
      return { ...state, activeDoctor: payload };
    case types.SET_DOCTORS_BY_ID_FAIL:
      return {
        ...state,
        activeDoctor: {},
        doctorsById: {},
      };
    case types.SET_DOCTORS_BY_ID_SUCCESS:
      return {
        ...state,
        activeDoctor: {},
        doctorsById: payload,
      };
    case types.SET_REVIEWS_BY_ID_FAIL:
      return {
        ...state,
        reviewsById: {},
      };
    case types.SET_REVIEWS_BY_ID_SUCCESS:
      return {
        ...state,
        reviewsById: payload,
      };
    default:
      return state;
  }
}
