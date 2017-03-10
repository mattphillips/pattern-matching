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
  })
});
