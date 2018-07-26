import { getRandomIndexes } from './numberUtils';

describe('getRandomIndexes', () => {
  it('Should return the correct count of random numbers', () => {
    const counts = [5, 10, 15, 20];
    counts.forEach(count => {
      const indexes1 = getRandomIndexes(count);
      const indexes2 = getRandomIndexes(count);
      expect(indexes1.length).toEqual(count);
      expect(indexes2.length).toEqual(count);
      expect(indexes1).not.toEqual(indexes2);
    });
  });

  it('Should return an empty array if the count input is not a number', () => {
    const badCounts = ['a', NaN, undefined, null, {}, []];
    badCounts.forEach(badCount => {
      const indexes1 = getRandomIndexes(badCount);
      const indexes2 = getRandomIndexes(badCount);
      expect(indexes1.length).toEqual(0);
      expect(indexes2.length).toEqual(0);
      expect(indexes1).toEqual(indexes2);
    });
  });
});
