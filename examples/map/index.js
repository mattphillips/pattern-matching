import { match, pattern, _ } from '../../src';

const map = (fn, array) => match(
  pattern(_, [])([]),
  pattern(Function, Array)(() => [fn(array[0])].concat(map(fn, array.slice(1))))
)(fn, array);

export default map;
