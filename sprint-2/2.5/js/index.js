'use strict';

//Exercise 1

function workWithMovies(){
  var movies = ['Split', 'Pulp Function', 'The village'];
  movies[3] = 'Grease';
  alert(movies[3]);

  movies[3] = 'Inception';
  alert(movies);

  movies[0] = 'The sound of music';
  alert(movies);
}

//workWithMovies();

//Exercise 2
//a
var numbers = [1, 4, 6, 78, 90];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
var mean = total / 5;
alert(mean);
//b
numbers.push(15);
total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
mean = total / 6;
alert(mean);
//c
function average(numbers){
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total/numbers.length;
}

alert(average([1, 2, 3]));
alert(average([1, 2, 3, 4, 5, 6]));
