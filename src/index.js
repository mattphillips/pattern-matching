import isEqual from 'lodash/isEqual';

export const _ = '_';

export const pattern = (...rules) => result => ({ rules, result });

export const match = (...patterns) => (...args) => {

  const matchedPattern = patterns.find(({ rules }) => rules.length === args.length && matches(rules, args));

  if (!matchedPattern)
    throw new Error(`No patterns match given args: ${args}`);

  const { result } = matchedPattern;

  if (typeof result === 'function')
    return result(...args);

  return result;
};

const matches = (rules, args) => {
  return rules.every((rule, index) => {
    return rule === _ || isEqual(rule, args[index]);
  });
};
