'use strict';

var decoder = function(encoded){
  return encoded
    .split('')
    .reverse()
    .join('')
    .replace(/\$/g, ' ')
    .replace(/5/g, 's')
    .replace(/6/g, 'b')
    .replace(/8/g, 'g')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a');
}

module.exports = decoder;

