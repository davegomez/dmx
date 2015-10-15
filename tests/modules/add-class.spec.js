/* eslint-disable */
// jscs: disable

import { assert, expect } from 'chai';
import addClass from '../../src/modules/add-class';
import { oList } from '../../src/internal/fixtures';
import { contains } from '../../src/internal/helpers';

describe('addClass function', () => {
  const div = document.createElement('div');
  div.innerHTML = oList;
  document.body.appendChild(div);

  const DOMinus = document.querySelectorAll('li');
  DOMinus.addClass = addClass(DOMinus);
  DOMinus.addClass('foo');
  DOMinus.addClass('bar, baz');

  let foo;
  let bar;
  let baz;
  let fooItems;
  let barItems;
  let bazItems;

  beforeEach(() => {
    foo = document.querySelector('.foo');
    bar = document.querySelector('.bar');
    baz = document.querySelector('.baz');
    fooItems = document.querySelectorAll('.foo');
    barItems = document.querySelectorAll('.bar');
    bazItems = document.querySelectorAll('.baz');
  });

  it('should return a function', () => {
    expect(addClass(DOMinus)).isFunction;
  });

  it('should be define', () => {
    expect(DOMinus.addClass).isDefine;
  });

  it('should have at least one element', () => {
    expect(foo).to.not.empty;
    expect(bar).to.not.empty;
    expect(baz).to.not.empty;
  });

  it('should contain class foo', () => {
    expect(contains(foo, 'foo')).isTrue;
    expect(contains(bar, 'foo')).isTrue;
    expect(contains(baz, 'foo')).isTrue;
  });

  it('should contain class bar', () => {
    expect(contains(foo, 'bar')).isTrue;
    expect(contains(bar, 'bar')).isTrue;
    expect(contains(baz, 'bar')).isTrue;
  });

  it('should contain class baz', () => {
    expect(contains(foo, 'baz')).isTrue;
    expect(contains(bar, 'baz')).isTrue;
    expect(contains(baz, 'baz')).isTrue;
  });

  it('should have a lenght of four', () => {
    expect(fooItems).lengthOf(4);
    expect(barItems).lengthOf(4);
    expect(bazItems).lengthOf(4);
  });

  it('should constain class foo on all items', () => {
    expect(contains(fooItems, 'foo')).isTrue;
    expect(contains(barItems, 'foo')).isTrue;
    expect(contains(bazItems, 'foo')).isTrue;
  });

  it('should constain class bar on all items', () => {
    expect(contains(fooItems, 'bar')).isTrue;
    expect(contains(barItems, 'bar')).isTrue;
    expect(contains(bazItems, 'bar')).isTrue;
  });

  it('should constain class baz on all items', () => {
    expect(contains(fooItems, 'baz')).isTrue;
    expect(contains(barItems, 'baz')).isTrue;
    expect(contains(bazItems, 'baz')).isTrue;
  });
});
