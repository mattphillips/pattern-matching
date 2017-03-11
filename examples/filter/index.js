import { match, pattern, _ } from '../../src';

const filter = (predicate, xs) => {
  const [ head, ...tail ] = xs;

  return match(
    pattern(_, [])([]),
    pattern(Function, Array)(

      () => match(
        pattern(true)([head, ...filter(predicate, tail)]),
        pattern(_)(filter(predicate, tail))
      )(predicate(head))
    )

  )(predicate, xs);
};

export default filter;
