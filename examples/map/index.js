import { match, pattern, _ } from '../../src';

const map = (fn, xs) => match(
  pattern(_, [])([]),
  pattern(Function, Array)(() => [fn(xs[0]), ...map(fn, xs.slice(1))])
)(fn, xs);

export default map;
