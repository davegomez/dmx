import { isNode } from './helpers';

export default function (nodes) {
  return isNode(nodes) ? Array.from(nodes) : [nodes];
}
