import { match, pattern } from '../../src';

const factorial = (n) => {
  return match(
    pattern(0)(1),
    pattern(Number)(() => n * factorial(n - 1))
  )(n);
}

export default factorial;
