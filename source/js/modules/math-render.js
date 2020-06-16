/* global document*/
'use strict';

const $ = require('jquery');
const katex = require('katex');

$(document).ready(function () {
  let katexGaussian = document.querySelector('#katex-gaussian');
  let katexMartini = document.querySelector('#katex-martini');

  katex.render('\\int_{-\\infty}^\\infty{e^{-x^2}dx} = \\sqrt{\\pi}', katexGaussian);
  katex.render('\\frac{3.5G+\\frac{V}{2}}{4(H_2O)^3} + 3(360^{\\circ}) = M', katexMartini);
});
