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
import { list } from '../fixtures';

describe('is helpers', () => {
  const div = document.createElement('div');
  div.innerHTML = list;
  document.body.appendChild(div);

  let fn;
  let node;
  let num;
  let obj;
  let srt;

  beforeEach(() => {
    fn = x => x;
    node = document.querySelectorAll('li');
    num = 24.6;
    obj = {};
    srt = 'foo';
  });

  it('should return true if is function', () => {
    expect(is.isFunction(fn)).isTrue;
    expect(is.isNode(fn)).isFalse;
    expect(is.isNumber(fn)).isFalse;
    expect(is.isObject(fn)).isFalse;
    expect(is.isString(fn)).isFalse;
  });

  it('should return true if is nodeList', () => {
    expect(is.isFunction(node)).isTrue;
    expect(is.isNode(node)).isTrue;
    expect(is.isNumber(node)).isFalse;
    expect(is.isObject(node)).isFalse;
    expect(is.isString(node)).isFalse;
  });

  it('should return true if is number', () => {
    expect(is.isFunction(num)).isFalse;
    expect(is.isNode(num)).isFalse;
    expect(is.isNumber(num)).isTrue;
    expect(is.isObject(num)).isFalse;
    expect(is.isString(num)).isFalse;
  });

  it('should return true if is object', () => {
    expect(is.isFunction(obj)).isFalse;
    expect(is.isNode(num)).isFalse;
    expect(is.isNumber(obj)).isFalse;
    expect(is.isObject(obj)).isTrue;
    expect(is.isString(obj)).isFalse;
  });

  it('should return true if is string', () => {
    expect(is.isFunction(srt)).isFalse;
    expect(is.isNode(srt)).isFalse;
    expect(is.isNumber(srt)).isFalse;
    expect(is.isObject(srt)).isFalse;
    expect(is.isString(srt)).isTrue;
  });
});
