'use strict';

var encoder = function(phrase){
  return phrase
    .replace(/a/g, '4')
    .replace(/e/g, '3')
    .replace(/g/g, '8')
    .replace(/b/g, '6')
    .replace(/s/g, '5')
    .replace(/ /g, '$')
    .split('')
    .reverse()
    .join('');
};

module.exports = encoder;
