/* global document*/
'use strict';

const $ = require('jquery');
const Prism = require('prismjs');
require('prismjs/plugins/line-numbers/prism-line-numbers.js');
require('prismjs/components/prism-latex.js');

$(document).ready(function () {
  Prism.highlightAll();
});
