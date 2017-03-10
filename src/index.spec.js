import { pattern, _ } from './';

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
