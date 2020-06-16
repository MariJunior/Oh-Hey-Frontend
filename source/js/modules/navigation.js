/* global document */
'use strict';

const $ = require('jquery');

$(document).ready(function () {
  let mainMenu = document.querySelector('.navigation__wrap');
  let mainMenuToggler = document.querySelector('.navigation__burger');

  const toggleMenu = function () {
    mainMenu.classList.toggle('navigation__wrap--closed');
    mainMenuToggler.classList.toggle('reset-button--opened');
  }

  mainMenu.classList.add('navigation__wrap--closed');

  mainMenuToggler.addEventListener('click', function(evt) {
    evt.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', function(evt) {
    const target = evt.target;
    const its_menu = target == mainMenu || mainMenu.contains(target);
    const its_btnMenu = target == mainMenuToggler;
    const menu_is_active = mainMenuToggler.classList.contains('reset-button--opened');

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  });
});
