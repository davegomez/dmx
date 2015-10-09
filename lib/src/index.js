import './main.scss';
import $ from './dominus';

const int = $('.internal');
const list = $('.item');
const node = $('<div/>');
const section = document.createElement('section');
const sectionDOM = $(section);
const div = document.querySelectorAll('div');
const divDOM = $(div);
console.log(int, list, node, sectionDOM, divDOM);

