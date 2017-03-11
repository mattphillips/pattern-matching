import { match, pattern, _ } from '../../src';

const reduce = (array, cb, initial) => match(
  pattern([], _, _)(initial),
  pattern(Array, Function, _)(() => reduce(array.slice(1), cb, cb(initial, array[0])))
)(array, cb, initial);

export default reduce;
