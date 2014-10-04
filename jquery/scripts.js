$(document).ready(function() {

  // Generate a random number and change the background color to 1 of 4 options
  $('button').on('click', function() {
    var random = Math.floor(Math.random() * 4);
    var colors = ['red', 'blue', 'green', 'yellow'];
    $('body').css('background-color', colors[random]);
  });

});