import isEqual from 'lodash/isEqual';

export const _ = '_';

export const pattern = (...rules) => result => ({ rules, result });

export const match = (...patterns) => (...args) => {

  const matchedPattern = patterns.find(({ rules }) => rules.length === args.length && matches(rules, args));

  if (!matchedPattern)
    throw new Error(`No patterns match given args: ${args}`);

  const { result } = matchedPattern;

  return result;
};

const matches = (rules, args) => {
  return rules.every((rule, index) => {

    if (rule === _) return true;

    return isEqual(rule, args[index]);
  });
};
