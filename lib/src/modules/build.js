import addClass from './add-class';
import builder from './../helpers/builder';
import isNode from './../helpers/is-node';
import context from './clean-string';
import removeClass from './remove-class';
import toArray from './to-array';
import wrapper from './../helpers/wrapper';

export default function (selector) {
  const pattern = /[^a-z]/g;

  const nodes = typeof selector === 'object' ?
    wrapper(selector) :
    builder(selector, pattern);

  nodes.addClass = addClass(nodes);
  nodes.context = isNode(selector) ?
    context(selector, pattern) :
    context('node');
  nodes.removeClass = removeClass(nodes);
  nodes.toArray = toArray(nodes);

  return nodes;
}
