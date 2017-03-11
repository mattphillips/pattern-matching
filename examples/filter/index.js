import { match, pattern, _ } from '../../src';

const filter = (predicate, array) => {
  const [ head, ...tail ] = array;

  return match(
    pattern(_, [])([]),
    pattern(Function, Array)(

      () => match(
        pattern(true)([head].concat(filter(predicate, tail))),
        pattern(_)(filter(predicate, tail))
      )(predicate(head))
    )

  )(predicate, array);
};

export default filter;
