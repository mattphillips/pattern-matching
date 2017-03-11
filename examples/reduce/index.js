import { match, pattern, _ } from '../../src';

const reduce = (xs, fn, initial) => match(
  pattern([], _, _)(initial),
  pattern(Array, Function, _)(() => reduce(xs.slice(1), fn, fn(initial, xs[0])))
)(xs, fn, initial);

export default reduce;
