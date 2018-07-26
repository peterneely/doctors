import moment from 'moment';
import _ from 'lodash';

const format = (date, pattern) => moment(date).format(pattern);

const nullable = (date, func) => (_.isDate(date) ? func() : null);

export const formatDate = date =>
  nullable(date, () => ({
    displayDate: format(date, 'MMM DD, YYYY'),
    sortDate: format(date, 'YYYY-MM-DD HH:mm:ss'),
  }));

export const getRandomDate = ({ date, daysAgo }) =>
  nullable(date, () =>
    moment(date)
      .subtract(_.random(daysAgo), 'days')
      .toDate(),
  );
