/**
 * Remove the correspondend classes from the each one of the Dmx object HTML
 * element nodes
 * @param {Object} elements - Collection of HTML nodes in the Dmx object
 * to which we want to remove the corresponding classes
 * @returns {Function} Function that takes a string of class names separated by
 * commas to be removed from each one of the HTML element nodes inside the
 * Dmx object
 */
export default (elements: Object): Function => {
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
};
