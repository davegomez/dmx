/* eslint-disable */
// jscs: disable

import { expect } from 'chai';
import * as is from '../../src/internal/helpers';
import { uList, noop } from './../../src/internal/fixtures';

describe('is internal', () => {
  const div = document.createElement('div');
  div.innerHTML = uList;
  document.body.appendChild(div);

  let fn;
  let node;
  let num;
  let obj;
  let srt;

  beforeEach(() => {
    fn = noop;
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
