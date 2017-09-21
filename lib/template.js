/**
 * @file Helper function
 * 
 * @author Nahid Akbar
 * @year 2015
 * @copyright National ICT Australia (NICTA). All rights reserved.
 */

"use strict";

var uglifyHS = require('pretty-print-hscode');

/**
 * Lightweight template system.
 * 
 * @param {string} str target string
 * @param {string} vars template variables
 * @return {string}
 * 
 * @example
 * template('{{subheading}}', {hscode: '0101010101'})
 * // will produce 'subheading 0101.01'
 * 
 */
function template(str, vars) {
  var candidates = str.match(/\{\{[^}]+\}\}/g);
  if (candidates) {
    candidates.forEach(function (candidate) {
      var variable = candidate.substr(2, candidate.length - 4);
      var value = false;
      switch (variable) {
        case 'subheading':
          if (vars.hscode) {
            value = uglifyHS(vars.hscode.replace(/[^0-9]/g, '').substr(0, 6), true).toLowerCase();
          }
          break;
        case 'heading':
          if (vars.hscode) {
            value = uglifyHS(vars.hscode.replace(/[^0-9]/g, '').substr(0, 4), true).toLowerCase();
          }
          break;
        case 'chapter':
          if (vars.hscode) {
            value = uglifyHS(vars.hscode.replace(/[^0-9]/g, '').substr(0, 2), true).toLowerCase();
          }
          break;
        case 'hscode':
          if (vars.hscode) {
            value = uglifyHS(vars.hscode.replace(/[^0-9]/g, ''), true).toLowerCase();
          }
          break;
        default:
          if (typeof vars[variable] === 'string') {
            value = vars[variable];
          }
          break;
      }
      if (value) {
        while (str.indexOf(candidate) !== -1) {
          str = str.replace(candidate, value);
        }
      } else {
        console.error('Variable ' + variable + ' could not be set.', str, vars);
      }
    });
  }
  return str;
}

module.exports = template;