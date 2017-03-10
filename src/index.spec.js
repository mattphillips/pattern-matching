import { match, pattern, _ } from './';

describe('.pattern', () => {
  test('returns a pattern object with given rules and result', () => {
    expect(pattern(Function, 100, 'Hello', _)('World!')).toEqual({
      rules: [
        Function,
        100,
        'Hello',
        _
      ],
      result: 'World!'
    });
  });
});

describe('.match', () => {
  test('throws error when no pattern expect the number of given args', () => {
    const identity = match(
      pattern(1)(1)
    );
    expect(() => identity(1, 1)).toThrow('No patterns match given args: 1,1');
  });

  test('returns result of wildcard when called with anything', () => {
    const all = match(
      pattern(_)(1)
    );

    expect(all('hello')).toBe(1);
    expect(all(['hello'])).toBe(1);
    expect(all(100)).toBe(1);
    expect(all({ hello: 'world' })).toBe(1);
  });
});
