import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.ADD_REVIEW:
      return {
        ...state,
        reviewsById: { ...state.reviewsById, [payload.id]: payload },
      };
    case types.CLEAR_ACTIVE_DOCTOR:
      return { ...state, activeDoctor: {} };
    case types.SET_ACTIVE_DOCTOR:
      return { ...state, activeDoctor: payload };
    case types.SET_DOCTORS_BY_ID_FAIL:
      return {
        ...state,
        activeDoctor: {},
        doctorsById: {},
        gotDoctors: false,
      };
    case types.SET_DOCTORS_BY_ID_SUCCESS:
      return {
        ...state,
        activeDoctor: {},
        doctorsById: payload,
        gotDoctors: true,
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
