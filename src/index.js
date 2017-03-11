import isEqual from 'lodash/isEqual';

export const _ = '_';

export const pattern = (...rules) => result => ({ rules, result });

export const match = (...patterns) => (...args) => {

  const matchedPattern = patterns.find(({ rules }) => rules.length === args.length && matches(rules, args));

  if (!matchedPattern)
    throw new Error(`No patterns match given args: ${args}`);

  const { result } = matchedPattern;

  if (isFunction(result))
    return result(...args);

  return result;
};

const matches = (rules, args) => {
  return rules.every((rule, index) => {
    const arguement = args[index];
    return rule === _
      || isEqual(rule, arguement)
      || isFunction(rule)
        && isArrayConstructor(rule) && isArray(arguement);
  });
};

const isFunction = fn => typeof fn === 'function';

const isArrayConstructor = fn => fn.name === 'Array';

const isArray = a => Array.isArray(a);
