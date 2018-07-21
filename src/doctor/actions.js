import { get } from './repo';
import * as types from './types';

export const getDoctors = () => {
  return dispatch => {
    get('https://jsonplaceholder.typicode.com/users').then(users => {
      dispatch({ payload: users, type: types.SET_DOCTOR_LIST });
    });
  };
};
