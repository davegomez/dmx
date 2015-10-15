import addClass from './add-class';
import builder from '../internal/build';
import { isNode, isObject } from '../internal/helpers';
import clean from '../internal/clean';
import removeClass from './remove-class';
import toArray from './to-array';
import wrap from '../internal/wrap';

export default function (selector) {
  const pattern = /[<\/>]/g;

  const DOMinus = isObject(selector) ?
    wrap(selector) :
    builder(selector, pattern);

  DOMinus.addClass = addClass(DOMinus);
  DOMinus.selector = isNode(selector) ?
    clean(selector, pattern) : 'Element';
  DOMinus.removeClass = removeClass(DOMinus);
  DOMinus.toArray = toArray();

  return Object.create(DOMinus);
}
