/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 David Gómez @davegomez
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Remove the correspondend classes from the each one of the DOMinus object HTML
 * element nodes
 * @param {Object} elements - Collection of HTML nodes in the DOMinus object
 * to which we want to remove the corresponding classes
 * @returns {Function} Function that takes a string of class names separated by
 * commas to be removed from each one of the HTML element nodes inside the
 * DOMinus object
 */
export default function (elements) {
  return classNames => {
    classNames
      .split(/ +/)
      .forEach(className =>
        Array.from(elements)
          .forEach(element =>
            element.classList.remove(className)
          )
      );

    return elements;
  };
}
