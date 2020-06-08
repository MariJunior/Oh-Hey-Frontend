/* global document, window*/
'use strict';

const $ = require('jquery');

$(document).ready(function () {
  let topBtn = $('.button--top');

  $(window).scroll(function() {
    if ($(window).scrollTop() >= '100') {
      topBtn.addClass('button--top-show');
    } else {
      topBtn.removeClass('button--top-show');
    }
  });
});
