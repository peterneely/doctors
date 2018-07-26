import { formatDate, getRandomDate } from './dateUtils';

describe('formatDate', () => {
  it('Should return the date in the correct formats', () => {
    const scenarios = [
      {
        date: new Date('December 17, 1995 03:24:02'),
        expected: {
          displayDate: 'Dec 17, 1995',
          sortDate: '1995-12-17 03:24:02',
        },
      },
      {
        date: new Date('2016-02-24 05:42:59'),
        expected: {
          displayDate: 'Feb 24, 2016',
          sortDate: '2016-02-24 05:42:59',
        },
      },
      {
        date: new Date('June 1, 2020 21:00:00'),
        expected: {
          displayDate: 'Jun 01, 2020',
          sortDate: '2020-06-01 21:00:00',
        },
      },
    ];
    scenarios.forEach(({ date, expected }) => {
      expect(formatDate(date)).toEqual(expected);
    });
  });

  it('Should return null for invalid dates', () => {
    const invalidDates = [NaN, undefined, null, 'some date', {}, []];
    invalidDates.forEach(invalidDate => {
      expect(formatDate(invalidDate)).toEqual(null);
    });
  });
});

describe('getRandomDate', () => {
  it('Should return a random date from x days ago', () => {
    const scenarios = [
      {
        date: new Date('December 17, 1995 03:24:02'),
        daysAgo: 1095, // 3 years
        limit: new Date('December 17, 1992 03:24:02'),
      },
      {
        date: new Date('2016-02-24 05:42:59'),
        daysAgo: 730, // 2 years
        limit: new Date('2014-02-24 05:42:59'),
      },
      {
        date: new Date('June 1, 2020 21:00:00'),
        daysAgo: 3,
        limit: new Date('May 28, 2020 21:00:00'),
      },
    ];
    scenarios.forEach(({ date, daysAgo, limit }) => {
      const dateSeconds = getRandomDate({ date, daysAgo }).getTime();
      const limitSeconds = limit.getTime();
      expect(dateSeconds).toBeGreaterThan(limitSeconds);
    });
  });

  it('Should return null for invalid dates', () => {
    const invalidDates = [NaN, undefined, null, 'some date', {}, []];
    invalidDates.forEach(date => {
      expect(getRandomDate({ date, daysAgo: 1095 })).toEqual(null);
    });
  });
});
