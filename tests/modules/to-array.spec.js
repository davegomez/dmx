/* eslint-disable */
// jscs: disable

import { assert, expect } from 'chai';
import toArray from '../../src/modules/to-array';
import { uList } from '../../src/internal/fixtures';

describe('toArray property', () => {
  const div = document.createElement('div');
  div.innerHTML = uList;
  document.body.appendChild(div);

  let fromElements;
  let fromAny;
  let dmx;
  let elements;

  beforeEach(() => {
    elements = document.querySelectorAll('li');
    fromElements = toArray(elements);
    fromAny = toArray('foo');
    dmx = {};
    dmx.toArray = toArray();
  });

  it('should return a function', () => {
    expect(toArray()).isFunction;
  });

  it('should be define', () => {
    expect(fromElements).isDefine;
    expect(fromAny).isDefine;
    expect(dmx.toArray).isDefine;
  });

  it('should return an array like object', () => {
    expect(fromElements()).isArray;
    expect(fromAny()).isArray;
  });

  it('should return array with one item if not nodeList or array', () => {
    expect(fromAny()).to.not.empty;
    expect(fromAny()).lengthOf(1);
  });

  it('should have a toArray property', () => {
    expect(dmx).property('toArray');
  });
});
