import changeCase from 'change-case';
import _ from 'lodash';

export const getDoctorsConfig = (() => {
  const requestCount = 15; // randomuser's free api only returns 1 record per call
  const ids = _.range(requestCount).map(number => (number + 1).toString());
  const chipTypesByRatingSummary = {
    fair: 'medium',
    high: 'hot',
    low: 'cool',
  };
  const practiceTypes = [
    'Dentist',
    'Family Practice',
    'General Practice',
    'Internal Medicine',
    'Oncology',
  ];
  const ratingSummaries = ['Fair', 'High', 'Low'];
  const createDisplayName = ({ name = {} }) => {
    const { first: firstName = '', last: lastName = '' } = name;
    return changeCase.title(`${firstName} ${lastName}`.trim());
  };
  const createSearchableTerms = (doctor, extended) => {
    const termFactories = [
      // ({ doctor }) => doctor.location.street,
      // ({ extended }) => extended.chipType,
      ({ extended }) => extended.displayName,
      // ({ extended }) => extended.practiceType,
      // ({ extended }) => extended.ratingSummary,
    ];
    return termFactories
      .reduce(
        (terms, createTerms) => `${terms} ${createTerms({ doctor, extended })}`,
        '',
      )
      .trim()
      .toLowerCase();
  };
  const extendDoctor = (doctor, index) => {
    const ratingSummary = random(ratingSummaries);
    const extended = {
      avatar: doctor.picture.medium,
      chipType: chipTypesByRatingSummary[ratingSummary.toLowerCase()],
      displayName: createDisplayName(doctor),
      id: ids[index], // id value from randomuser can be null sometimes, so don't use it
      practiceType: random(practiceTypes),
      ratingSummary,
      reviewCount: _.random(100, 200),
    };
    extended.searchableTerms = createSearchableTerms(doctor, extended);
    return _.merge({}, doctor, extended);
  };
  const random = collection => {
    const randomIndex = _.random(collection.length - 1);
    return collection[randomIndex];
  };
  return {
    requestCount,
    toViewModel: results =>
      results
        .map((result, index) => {
          const { data: { results = [] } = {} } = result;
          return results.length ? extendDoctor(results[0], index) : null;
        })
        .filter(item => item),
    url: 'https://randomuser.me/api/', // alternative, but no avatars: 'https://jsonplaceholder.typicode.com/users'
  };
})();
