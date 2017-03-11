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

  describe('returns result when given arguement is equal to primitive datatype pattern', () => {
    test('string', () => {
      const stringMatch = match(pattern('hello')('world'));
      expect(stringMatch('hello')).toBe('world');
    });

    test('number', () => {
      const numberMatch = match(pattern(1)(0));
      expect(numberMatch(1)).toBe(0);
    });

    test('null', () => {
      const nullMatch = match(pattern(null)('Nothing'));
      expect(nullMatch(null)).toBe('Nothing');
    });

    test('undefined', () => {
      const undefinedMatch = match(pattern(undefined)('empty'));
      expect(undefinedMatch(undefined)).toBe('empty');
    });

    test('boolean', () => {
      const booleanMatch = match(pattern(true)(false));
      expect(booleanMatch(true)).toBe(false);
    });
  });

  describe('returns result when given arguement is deeply equal to object datatype pattern', () => {
    test('object', () => {
      const objectMatch = match(pattern({ hello: 'world' })('matched'));
      expect(objectMatch({ hello: 'world' })).toBe('matched');
    });

    test('array', () => {
      const arrayMatch = match(pattern([1, 2, 3])('matched'));
      expect(arrayMatch([1, 2, 3])).toBe('matched');
    });
  });

  test('returns value returned from result when result is a function', () => {
    const add = match(pattern(_, _)((a, b) => a + b));
    expect(add(1, 1)).toBe(2);
  });

  describe('returns result when given arguement matches constructor type', () => {
    test('Array', () => {
      const arrayMatch = match(pattern(Array)(true));
      expect(arrayMatch([1, 2, 3])).toBe(true);
    });

    test('Date', () => {
      const dateMatch = match(pattern(Date)(true));
      expect(dateMatch(new Date())).toBe(true);
    });

    test('Map', () => {
      const mapMatch = match(pattern(Map)(true));
      expect(mapMatch(new Map())).toBe(true);
    });

    test('Set', () => {
      const setMatch = match(pattern(Set)(true));
      expect(setMatch(new Set('hello'))).toBe(true);
    });
  });
});
