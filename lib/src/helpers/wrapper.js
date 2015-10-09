import isNode from './is-node';

export default function (nodes) {
  return isNode(nodes) ? Array.from(nodes) : [nodes];
}
