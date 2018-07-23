import { get } from 'axios';
import _ from 'lodash';

import {
  doctorCount,
  doctorApiUrl,
  reviewsApiUrl,
  reviewsAuthorsApiUrl,
} from './config';
import toDoctorViewModel from './doctorViewModel';
import toReviewViewModel from './reviewViewModel';

export const getDoctors = () => {
  const promises = _.range(doctorCount).map(() => get(doctorApiUrl));
  return Promise.all(promises)
    .then(toDoctorViewModel)
    .catch(error => error);
};

export const getReviews = () => {
  const promises = [get(reviewsApiUrl), get(reviewsAuthorsApiUrl)];
  return Promise.all(promises)
    .then(toReviewViewModel)
    .catch(error => error);
};
