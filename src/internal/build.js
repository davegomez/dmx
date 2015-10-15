export default function (selector, pattern) {
  return selector.includes('.') || selector.includes('#') ?
    Array.from(document.querySelectorAll(selector)) :
    [document.createElement(selector.replace(pattern, ''))];
}
