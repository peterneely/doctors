import _ from 'lodash';
import * as repo from './repo';
import * as types from './types';

export const getDoctors = () => {
  return dispatch => {
    repo.getDoctors().then(doctors => {
      dispatch({
        payload: _.keyBy(doctors, ({ id }) => id),
        type: types.SET_DOCTORS_BY_ID,
      });
    });
  };
};
