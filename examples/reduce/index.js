import { match, pattern, _ } from '../../src';

const reduce = (array, fn, initial) => match(
  pattern([], _, _)(initial),
  pattern(Array, Function, _)(() => reduce(array.slice(1), fn, fn(initial, array[0])))
)(array, fn, initial);

export default reduce;
