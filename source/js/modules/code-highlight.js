/* global document*/
'use strict';

const $ = require('jquery');
const Prism = require('prismjs');
require('prismjs/plugins/line-numbers/prism-line-numbers.js');
const loadLanguages = require('prismjs/components/');
loadLanguages(['latex']);

$(document).ready(function () {
  Prism.highlightAll();
});
