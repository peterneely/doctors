import moment from 'moment';
import _ from 'lodash';

const isoDateFormat = 'YYYY-MM-DD HH:mm:ss';
const displayDateFormat = 'MMM DD, YYYY';

export const formatDate = date => {
  const isoDate = moment(date).format(isoDateFormat);
  const displayDate = moment(isoDate).format(displayDateFormat);
  return { displayDate, sortDate: isoDate };
};

const extendReviews = (reviews, authors) => {
  const limitedReviews = _.take(reviews, 20);
  const limitedAuthors = _.take(authors, 20);
  const authorsById = _.keyBy(limitedAuthors, ({ id }) => id);
  return limitedReviews.map((review = {}) => {
    const { body, id, userId } = review;
    const author = authorsById[userId] || {};
    const isoDate = moment(new Date())
      .subtract(_.random(1095), 'days')
      .format(isoDateFormat);
    return {
      body,
      date: moment(isoDate).format(displayDateFormat),
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
