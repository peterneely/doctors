import { get } from 'axios';
import _ from 'lodash';

import { getDoctorsConfig } from './repoConfig';

export const getDoctors = () => {
  const { requestCount, toViewModel, url } = getDoctorsConfig;
  const promises = _.range(requestCount).map(() => get(url));
  return Promise.all(promises).then(toViewModel);
};
