export const _ = '_';

export const pattern = (...rules) => result => ({ rules, result });

export const match = (...patterns) => (...args) => {

  const matchedPattern = patterns.find(({ rules }) => rules.length === args.length);

  if (!matchedPattern)
    throw new Error(`No patterns match given args: ${args}`);
};
