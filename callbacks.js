/* 
  Write a function called reverse that makes the code below work properly.
  The code below should log "The reversedString is .desrever teg dluohs sihT"
*/

var reverse = function(str, cb) {
    var copy = str.split('').reverse().join('');
    cb(copy);
};

var sentence = 'This should get reversed.'
var reverse = function(str) {
  return str.split('').reverse().join('');
};