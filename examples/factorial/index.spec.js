import factorial from './';

describe('.factorial', () => {
  test('returns 1 when given 0', () => {
    expect(factorial(0)).toEqual(1);
  });

  test('returns 120 when given 5', () => {
    expect(factorial(5)).toEqual(120);
  });

  test('throws error when no pattern matches given arguments', () => {
    expect(() => factorial('hello')).toThrow('No patterns match given args: hello');
  });
});
