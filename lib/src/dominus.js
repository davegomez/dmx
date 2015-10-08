import toArray from './modules/to-array';
import addClass from './modules/add-class';
import removeClass from './modules/remove-class';

const build = selector => {
  const nodeList = selector.includes('.') || selector.includes('#') ?
    document.querySelectorAll(selector) :
    document.createElement(selector);

  nodeList.context = selector;
  nodeList.toArray = toArray(nodeList);
  nodeList.addClass = addClass(nodeList);
  nodeList.removeClass = removeClass(nodeList);

  return nodeList;
};

export default function (selector) {
  return build(selector);
}
