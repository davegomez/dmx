import './main.scss';
import $ from './dominus';
import { Map } from 'immutable';

const int = $('.internal');
const list = $('.item');
const node = $('<div/>');
const section = document.createElement('section');
const sectionDOM = $(section);
const div = document.querySelectorAll('div');
const div2 = document.querySelectorAll('div');
const divDOM = $(div);
console.log(int, list, node, sectionDOM, divDOM);

console.log($);

var map1 = Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
console.log(map1.get('b'));
console.log(map2.get('b'));
