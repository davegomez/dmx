/* eslint-disable */
// jscs: disable

import { assert, expect } from 'chai';
import removeClass from '../../src/modules/remove-class';
import { uList } from '../../src/internal/fixtures';
import { contains } from '../../src/internal/helpers';

describe('removeClass Function', () => {
  const div = document.createElement('div');
  div.innerHTML = uList;
  document.body.appendChild(div);

  const dmx = document.querySelectorAll('li');
  dmx.removeClass = removeClass(dmx);

  it('should return a function', () => {
    expect(removeClass(dmx)).isFunction;
  });

  it('should be define', () => {
    expect(dmx.removeClass).isDefine;
  });

  describe('remove single classes', () => {
    beforeEach(() => {
      dmx.removeClass('test-class__1');
      dmx.removeClass('test-class__3');
    });

    it('should not exist any element with class test-class__1', () => {
      const testObj = document.getElementsByClassName('test-class__1');
      expect(testObj).to.have.length(0);
    });

    it('should not exist any element with class test-class__3', () => {
      const testObj = document.getElementsByClassName('test-class__3');
      expect(testObj).to.have.length(0);
    });

    it('should exist elements with class test-class__0', () => {
      const testObj = document.getElementsByClassName('test-class__0');
      expect(testObj).to.have.length(2);
    });

    it('should exist elements with class test-class__2', () => {
      const testObj = document.getElementsByClassName('test-class__2');
      expect(testObj).to.have.length(2);
    });
  });

  describe('remove multiple classes', () => {
    beforeEach(() => {
      dmx.removeClass('test-class__2, test-class__0');
    });

    it('should not exist any element with class test-class__0', () => {
      const testObj = document.getElementsByClassName('test-class__0');
      expect(testObj).to.have.length(0);
    });

    it('should not exist any element with class test-class__2', () => {
      const testObj = document.getElementsByClassName('test-class__2');
      expect(testObj).to.have.length(0);
    });

    it('should exist elements with class test-class__1', () => {
      const testObj = document.getElementsByClassName('test-class__1');
      expect(testObj).to.have.length(3);
    });

    it('should exist elements with class test-class__3', () => {
      const testObj = document.getElementsByClassName('test-class__3');
      expect(testObj).to.have.length(3);
    });
  });
});
