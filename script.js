'use strict';

const root = document.documentElement;
const wrapper = document.querySelector('.wrapper');

const dashboard = document.querySelector('.dashboard'); //justify content center
const dashboardElementsTxt = document.querySelector('.dashboard>*:not(svg)');

const navElements = document.querySelectorAll('.nav-elements');
const navElementsTxt = document.querySelectorAll(
  '.nav-elements > div > *:not(svg)'
); //justify content center

const navTools = document.querySelectorAll('.nav-tools');
const navToolsTxt = document.querySelectorAll('.nav-tools > div > *:not(svg)');

const navIcons = document.querySelector('.sidebar .icons'); //scale 1.5x

dashboard.addEventListener('click', () => {
  let navSize =
    getComputedStyle(root).getPropertyValue('--sidebar-size').trim() === '1fr'? '75px' : '1fr';
      console.log(navSize);
  root.style.setProperty('--sidebar-size', navSize);

  dashboardElementsTxt.classList.toggle('display');
  dashboard.classList.toggle('center');

  toggle(navElementsTxt, 'display');
  toggle(navElements, 'center');
  toggle(navToolsTxt, 'display');
  toggle(navTools, 'center');
});

function toggle(elements, cssClass) {
  elements.forEach((element) => {
    element.classList.toggle(cssClass);
  });
}
