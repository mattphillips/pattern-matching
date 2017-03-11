import map from './';

describe('.map', () => {
  test('returns an empty array when given an empty array', () => {
    const noop = () => {};
    expect(map(noop, [])).toEqual([]);
  });

  test('returns given array mapped over function to double each value', () => {
    const double = x => x * 2;
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
  });
});
