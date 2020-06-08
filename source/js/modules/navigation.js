/* global document */
'use strict';

const $ = require('jquery');

$(document).ready(function () {
  let mainMenu = document.querySelector('.navigation__wrap');
  let mainMenuToggler = document.querySelector('.navigation__burger');

  mainMenu.classList.add('navigation__wrap--closed');

  mainMenuToggler.addEventListener('click', function() {
    if (mainMenu.classList.contains('navigation__wrap--closed')) {
      mainMenu.classList.remove('navigation__wrap--closed');
      mainMenuToggler.classList.add('navigation__burger--opened');
    } else {
      mainMenu.classList.add('navigation__wrap--closed');
      mainMenuToggler.classList.remove('navigation__burger--opened');
    }
  });
});
