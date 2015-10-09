export default function (node) {
  return typeof node.length !== 'undefined' &&
    typeof node.item !== 'undefined';
}
