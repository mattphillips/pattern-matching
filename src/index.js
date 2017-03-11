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
        && isArrayConstructor(rule) && isArray(arguement)
        || isDateConstructor(rule) && isDate(arguement)
        || isMapConstructor(rule) && isMap(arguement)
        || isSetConstructor(rule) && isSet(arguement);
  });
};

const isFunction = fn => typeof fn === 'function';

const isArrayConstructor = fn => fn.name === 'Array';
const isDateConstructor = fn => fn.name === 'Date';
const isMapConstructor = fn => fn.name === 'Map';
const isSetConstructor = fn => fn.name === 'Set';

const isArray = a => Array.isArray(a);
const isDate = d => d instanceof Date;
const isMap = m => m instanceof Map;
const isSet = s => s instanceof Set;
