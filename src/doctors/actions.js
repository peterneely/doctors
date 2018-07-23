import _ from 'lodash';
import * as repo from './repo';
import * as types from './types';
import { setMessage } from '../layout/actions';

export const clearActiveDoctor = () => {
  console.log('clearActiveDoctor');
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

export const setActiveDoctor = (doctor = {}) => {
  return (dispatch, getState) => {
    const { doctors: { activeDoctor = {} } = {} } = getState();
    if (activeDoctor.id === doctor.id) return;
    dispatch({ payload: doctor, type: types.SET_ACTIVE_DOCTOR });
    dispatch(getReviews(doctor));
  };
};
