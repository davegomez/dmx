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

/* eslint-disable */
// jscs: disable

import { expect } from 'chai';
import * as is from '../../src/helpers/is';

describe('is helpers', () => {
  const fn = (param) => param;
  const node = document.createElement('div');
  const num = 24.6;
  const obj = {};
  const srt = 'foo';

  it('should return true if is function', () => {
    expect(is.isFunction(fn)).to.be.true;
    expect(is.isNode(fn)).to.be.false;
    expect(is.isNumber(fn)).to.be.false;
    expect(is.isObject(fn)).to.be.false;
    expect(is.isString(fn)).to.be.false;
  });

  it('should return true if is node', () => {
    expect(is.isFunction(node)).to.be.false;
    expect(is.isNode(node)).to.be.true;
    expect(is.isNumber(node)).to.be.false;
    expect(is.isObject(node)).to.be.false;
    expect(is.isString(node)).to.be.false;
  });

  it('should return true if is number', () => {
    expect(is.isFunction(num)).to.be.false;
    expect(is.isNode(num)).to.be.false;
    expect(is.isNumber(num)).to.be.true;
    expect(is.isObject(num)).to.be.false;
    expect(is.isString(num)).to.be.false;
  });

  it('should return true if is object', () => {
    expect(is.isFunction(obj)).to.be.false;
    expect(is.isNode(num)).to.be.false;
    expect(is.isNumber(obj)).to.be.false;
    expect(is.isObject(obj)).to.be.true;
    expect(is.isString(obj)).to.be.false;
  });

  it('should return true if is string', () => {
    expect(is.isFunction(srt)).to.be.false;
    expect(is.isNode(srt)).to.be.false;
    expect(is.isNumber(srt)).to.be.false;
    expect(is.isObject(srt)).to.be.false;
    expect(is.isString(srt)).to.be.true;
  });
});
