import createId from 'uuid/v1';
import _ from 'lodash';

export const getDoctorsConfig = (() => {
  const practiceTypes = [
    'Dentist',
    'Family Practice',
    'General Practice',
    'Internal Medicine',
    'Oncology',
  ];
  const ratingSummaries = ['Fair', 'High', 'Low'];
  const random = collection => {
    const randomIndex = _.random(collection.length - 1);
    return collection[randomIndex];
  };
  return {
    requestCount: 15, // randomuser's free api only returns 1 record per call
    toViewModel: results =>
      results
        .map(({ data = {} }) => {
          const { results = [] } = data;
          if (!results.length) return null;
          const item = results[0];
          item.id = createId(); // id value from randomuser can be null sometimes, so don't use it
          item.ratingSummary = random(ratingSummaries);
          item.practiceType = random(practiceTypes);
          item.reviewCount = _.random(50, 200);
          return item;
        })
        .filter(item => item),
    url: 'https://randomuser.me/api/', // alternative, but no avatars: 'https://jsonplaceholder.typicode.com/users'
  };
})();
