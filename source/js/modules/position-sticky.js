/* global document*/
'use strict';

const $ = require('jquery');
const Stickyfill = require('stickyfilljs');

$(document).ready(function () {
  var elements = $('.sticky');
  Stickyfill.add(elements);
});
