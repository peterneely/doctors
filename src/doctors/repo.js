import { get } from 'axios';
import _ from 'lodash';

import { doctorCount, doctorApiUrl } from './config';
import toViewModel from './viewModel';

export const getDoctors = () => {
  const promises = _.range(doctorCount).map(() => get(doctorApiUrl));
  return Promise.all(promises)
    .then(toViewModel)
    .catch(error => error);
};
