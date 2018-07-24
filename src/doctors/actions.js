import _ from 'lodash';
import * as repo from './repo';
import * as types from './types';
import { setMessage } from '../layout/actions';
import { formatDate } from './reviewViewModel';

export const addReview = ({ body, name }) => upsertReview({ body, name });

export const clearActiveDoctor = () => {
  return (dispatch, getState) => {
    const { doctors: { activeDoctor = {} } = {} } = getState();
    if (!_.size(activeDoctor)) return;
    dispatch({ type: types.CLEAR_ACTIVE_DOCTOR });
  };
};

export const getDoctors = () => {
  return (dispatch, getState) => {
    const { doctors: { gotDoctors } = {} } = getState();
    if (gotDoctors) return;
    repo
      .getDoctors()
      .then(doctors => {
        dispatch({
          payload: _.keyBy(doctors, ({ id }) => id),
          type: types.SET_DOCTORS_BY_ID_SUCCESS,
        });
      })
      .catch(error => {
        dispatch({ type: types.SET_DOCTORS_BY_ID_FAIL });
        dispatch(
          setMessage({
            details: error,
            message:
              'Could not get doctors. Please refresh the page to try again.',
            messageType: 'error',
          }),
        );
      });
  };
};

export const getReviews = ({ id: doctorId }) => {
  return dispatch => {
    repo
      .getReviews(doctorId)
      .then(reviews => {
        dispatch({
          payload: _.keyBy(reviews, ({ id }) => id),
          type: types.SET_REVIEWS_BY_ID_SUCCESS,
        });
      })
      .catch(error => {
        dispatch({ type: types.SET_REVIEWS_BY_ID_FAIL });
        dispatch(
          setMessage({
            details: error,
            message:
              'Could not get reviews. Please refresh the page to try again.',
            messageType: 'error',
          }),
        );
      });
  };
};

export const removeReview = ({ id }) => ({
  payload: id,
  type: types.REMOVE_REVIEW,
});

export const setActiveDoctor = (doctor = {}) => {
  return (dispatch, getState) => {
    const { doctors: { activeDoctor = {} } = {} } = getState();
    if (activeDoctor.id === doctor.id) return;
    dispatch({ payload: doctor, type: types.SET_ACTIVE_DOCTOR });
    dispatch(getReviews(doctor));
  };
};

export const upsertReview = ({ body, id, name }) => {
  return (dispatch, getState) => {
    if (!body || !name) return;
    const { doctors: { reviewsById = {} } = {} } = getState();
    const { displayDate, sortDate } = formatDate(new Date());
    const review = {
      body,
      date: displayDate,
      id: id || _.size(reviewsById) + 1,
      name,
      order: sortDate,
    };
    dispatch({ payload: review, type: types.UPSERT_REVIEW });
  };
};
