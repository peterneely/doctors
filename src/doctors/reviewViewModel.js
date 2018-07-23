import moment from 'moment';
import _ from 'lodash';

const extendReviews = (reviews, authors) => {
  const authorsById = _.keyBy(authors, ({ id }) => id);
  return reviews.map((review = {}) => {
    const { body, id, userId } = review;
    const author = authorsById[userId] || {};
    const isoDate = moment(new Date())
      .subtract(_.random(1095), 'days')
      .format('YYYY-MM-DD');
    return {
      body,
      date: moment(isoDate).format('MMM DD, YYYY'),
      id,
      name: author.name || 'Some Name',
      order: isoDate,
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
