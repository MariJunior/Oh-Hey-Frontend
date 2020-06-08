/* global document*/
'use strict';

const $ = require('jquery');
const smoothscroll = require('smoothscroll-polyfill');

$(document).ready(function () {
  smoothscroll.polyfill();
});
