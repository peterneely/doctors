import _ from 'lodash';

const extendReviews = (reviews, authors) => {
  const authorsById = _.keyBy(authors, ({ id }) => id);
  return reviews.map((review = {}) => {
    const { body, id, userId } = review;
    const author = authorsById[userId] || {};
    return {
      body,
      date: new Date(),
      id,
      name: author.name || 'Some Name',
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
