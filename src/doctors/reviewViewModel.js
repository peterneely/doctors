import _ from 'lodash';

import { formatDate, getRandomDate } from '../services/dateUtils';
import { getRandomIndexes } from '../services/numberUtils';

const extendReviews = (reviews, authors) => {
  const limitedReviews = getRandomIndexes(20).reduce(
    (chosenReviews, index) => [...chosenReviews, reviews[index]],
    [],
  );
  const authorsById = _.keyBy(authors, ({ id }) => id);
  return limitedReviews.map((review = {}) => {
    const { body, id, userId } = review;
    const author = authorsById[userId] || {};
    const randomDate = getRandomDate({ date: new Date(), daysAgo: 1095 });
    const { displayDate, sortDate } = formatDate(randomDate);
    return {
      body,
      date: displayDate,
      id,
      name: author.name || 'Some Name',
      order: sortDate,
    };
  });
};

const toViewModel = (results = []) => {
  if (results.length < 2) return new Error('Incomplete data from API.');
  const reviews = results[0].data;
  const authors = results[1].data;
  return extendReviews(reviews, authors);
};

export default toViewModel;
