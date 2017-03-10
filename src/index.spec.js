import { pattern } from './';

describe('.pattern', () => {
  test('returns a pattern object with given rules and result', () => {
    expect(pattern(Function, 100, 'Hello')('World!')).toEqual({
      rules: [
        Function,
        100,
        'Hello'
      ],
      result: 'World!'
    });
  });
});
