import { match, pattern, _ } from '../../src';

const map = (mapper, array) => match(
  pattern(_, [])([]),
  pattern(Function, Array)(() => [mapper(array[0])].concat(map(mapper, array.slice(1))))
)(mapper, array);

export default map;
