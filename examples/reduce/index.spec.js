import reduce from './';

describe('.reduce', () => {
  describe('sum', () => {

    const sum = (acc, x) => acc + x;

    test('returns initial accumulator value when given an empty array', () => {
      expect(reduce([], sum, 0)).toBe(0);
    });

    test('returns sum of 1 when given an array of 1', () => {
      expect(reduce([1], sum, 0)).toBe(1);
    });

    test('returns sum of 11 when given an array of 1 and an initial accumulator of 10', () => {
      expect(reduce([1], sum, 10)).toBe(11);
    });

    test('returns sum of 1, 2, 3 as 6', () => {
      expect(reduce([1, 2, 3], sum, 0)).toBe(6);
    });
  });
});
