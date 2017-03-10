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

  test('returns result when given arguement matches string pattern exactly', () => {
    const stringPattern = match(
      pattern('hello')('world')
    );
    expect(stringPattern('hello')).toBe('world');
  });

  test('returns result when given arguement matches number pattern exactly', () => {
    const numberPattern = match(
      pattern(1)(0)
    );
    expect(numberPattern(1)).toBe(0);
  });

  test('returns result when given arguement matches null pattern exactly', () => {
    const nullPattern = match(
      pattern(null)('Nothing')
    );
    expect(nullPattern(null)).toBe('Nothing');
  });

  test('returns result when given arguement matches object pattern exactly', () => {
    const objectPattern = match(
      pattern({ hello: 'world' })('matched')
    );
    expect(objectPattern({ hello: 'world' })).toBe('matched');
  });

  test('returns result when given arguement matches array pattern exactly', () => {
    const arrayPattern = match(
      pattern([1, 2, 3])('matched')
    );
    expect(arrayPattern([1, 2, 3])).toBe('matched');
  });
});
