import filter from './';

describe('.filter', () => {
  test('returns an empty array when filtering over an empty array', () => {
    const noop = () => {};
    expect(filter(noop, [])).toEqual([]);
  });

  test('returns all even numbers in given array', () => {
    const isEven = x => x % 2 === 0;
    expect(filter(isEven, [1, 2, 3])).toEqual([2]);
  });
});
