import _ from 'lodash';
import * as repo from './repo';
import * as types from './types';
import { setMessage } from '../layout/actions';

export const getDoctors = () => {
  return (dispatch, getState) => {
    const { doctors: { success = false } = {} } = getState();
    if (success) return;
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

export const setActiveDoctor = doctor => ({
  payload: doctor,
  type: types.SET_ACTIVE_DOCTOR,
});
