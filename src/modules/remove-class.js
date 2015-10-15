/**
 * Remove the correspondend classes from the each one of the DOMinus object HTML
 * element nodes
 * @param {Object} elements - Collection of HTML nodes in the DOMinus object
 * to which we want to remove the corresponding classes
 * @returns {Function} Function that takes a string of class names separated by
 * commas to be removed from each one of the HTML element nodes inside the
 * DOMinus object
 * @returns {Object} A DOMinus object
 */
export default function (elements: Object): Function {
  return (classNames: string): Object => {
    classNames
      .split(/, +/)
      .forEach(className =>
        Array.from(elements)
          .forEach(element =>
            element.classList.remove(className)
          )
      );

    return elements;
  };
}
