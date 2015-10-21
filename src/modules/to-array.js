import { isNode } from '../internal/helpers';

/**
 * Transforms the Dmx NodeList of HTML elements into a native Array allowing
 * us to use the native Array function on the returned collection of elements
 * @param {Object} elements - Collection of HTML nodes to return as a JavaScript
 * native array
 * @returns {Function} A helper function to allows the transformation of Dmx
 * objects to JavaScript native Arrays
 * @returns {Object} JavaScript native Array collection containing the Dmx
 * object HTML element nodes or the passed element as a native Array
 */
export default function (elements: Object): Function {
  return (): Array<Object> =>
    isNode(elements) || Array.isArray(elements) ?
      Array.from(elements) :
      [elements];
}
