import _ from 'lodash';
import * as repo from './repo';
import * as types from './types';
import { setMessage } from '../layout/actions';

export const getDoctors = () => {
  return dispatch => {
    repo
      .getDoctors()
      .then(doctors => {
        dispatch({
          payload: _.keyBy(doctors, ({ id }) => id),
          type: types.SET_DOCTORS_BY_ID,
        });
      })
      .catch(error => {
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
