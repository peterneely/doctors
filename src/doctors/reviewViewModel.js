import _ from 'lodash';

import { formatDate, getRandomDate } from '../services/dateUtils';
import { getRandomIndexes } from '../services/numberUtils';

const extendReviews = (reviews, authors) => {
  const limitedReviews = getRandomIndexes(20).reduce(
    (chosenReviews, index) => [...chosenReviews, reviews[index]],
    [],
  );
  const authorsById = _.keyBy(authors, ({ id }) => id);
  return _.chain(limitedReviews)
    .map((review = {}) => {
      const { body, userId } = review;
      const author = authorsById[userId] || {};
      const randomDate = getRandomDate({ date: new Date(), daysAgo: 1095 });
      const { displayDate, sortDate } = formatDate(randomDate);
      return {
        body,
        date: displayDate,
        name: author.name || 'Some Name',
        order: sortDate,
      };
    })
    .orderBy(['order'])
    .map((review, index) => ({ ...review, id: index + 1 }))
    .value();
};

const toViewModel = (results = []) => {
  if (results.length < 2) return new Error('Incomplete data from API.');
  const reviews = results[0].data;
  const authors = results[1].data;
  return extendReviews(reviews, authors);
};

export default toViewModel;
