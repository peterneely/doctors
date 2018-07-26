import _ from 'lodash';

export const getRandomIndexes = countIndexes => {
  const indexes = [];
  while (indexes.length < countIndexes) {
    const index = _.random(0, 99);
    if (!indexes.includes(index)) indexes.push(index);
  }
  return indexes;
};
