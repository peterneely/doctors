import _ from 'lodash';
import { get } from './repo';
import * as types from './types';

export const getDoctors = () => {
  return dispatch => {
    get('https://jsonplaceholder.typicode.com/users').then(users => {
      const doctorsById = _.keyBy(users, ({ id }) => id);
      dispatch({ payload: doctorsById, type: types.SET_DOCTOR_LIST });
    });
  };
};
