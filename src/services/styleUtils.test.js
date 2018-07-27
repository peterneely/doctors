import { fullHeight } from './styleUtils';

describe('fullHeight', () => {
  it('Should return the correct CSS valueg when given a valid offsetHeight', () => {
    const validOffsetHeights = [10, 50, 100, 200];
    validOffsetHeights.forEach(offsetHeight => {
      expect(fullHeight(offsetHeight)).toEqual(
        `calc(100vh - ${offsetHeight}px)`,
      );
    });
  });

  it('Should return the correct CSS value when given an invalid offsetHeight', () => {
    const invalidOffsetHeights = ['a', NaN, undefined, null, {}, []];
    invalidOffsetHeights.forEach(offsetHeight => {
      expect(fullHeight(offsetHeight)).toEqual('100vh');
    });
  });
});
