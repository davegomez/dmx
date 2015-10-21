import addClass from './add-class';
import builder from '../internal/build';
import { isNode, isObject } from '../internal/helpers';
import clean from '../internal/clean';
import removeClass from './remove-class';
import toArray from './to-array';
import wrap from '../internal/wrap';

export default function (selector) {
  const pattern = /[<\/>]/g;

  const dmx = isObject(selector) ?
    wrap(selector) :
    builder(selector, pattern);

  dmx.addClass = addClass(dmx);
  dmx.selector = isNode(selector) ?
    clean(selector, pattern) : 'Element';
  dmx.removeClass = removeClass(dmx);
  dmx.toArray = toArray();

  return Object.create(dmx);
}
