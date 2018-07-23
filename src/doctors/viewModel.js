import changeCase from 'change-case';
import _ from 'lodash';

import { doctorCount } from './config';

const ids = _.range(doctorCount).map(number => (number + 1).toString());

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
  const { location = {}, picture } = doctor;
  const { city = '', postcode = '', state = '', street = '' } = location;
  const stateZip = changeCase.title(`${state} ${postcode}`);
  const addressLine2 = `${changeCase.title(city)}, ${stateZip}`.replace(
    /^, |, $/g,
    '',
  );
  const ratingSummary = random(ratingSummaries);
  const extended = {
    addressLine1: changeCase.title(street),
    addressLine2,
    avatar: picture.medium,
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

const toViewModel = results =>
  results
    .map((result, index) => {
      const { data: { results = [] } = {} } = result;
      return results.length ? extendDoctor(results[0], index) : null;
    })
    .filter(item => item);

export default toViewModel;
