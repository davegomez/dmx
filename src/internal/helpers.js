export const isFunction = (fn: Function): boolean => typeof fn === 'function';

export const isNumber = (num: number): boolean => typeof num === 'number';

export const isObject = (obj: Object): boolean => typeof obj === 'object';

export const isString = (str: string): boolean => typeof str === 'string';

export const isNode = (node: Object): boolean =>
  typeof node.length !== 'undefined' &&
  typeof node.item !== 'undefined';

export const contains = (elem: Object, name: string) =>
  elem.length ?
  Array.from(elem)
    .filter(item =>
      !item.classList.contains(name)
    ).length > 0 :
  elem.classList.contains(name);
