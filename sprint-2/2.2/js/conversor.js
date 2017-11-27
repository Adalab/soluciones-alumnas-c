'use strict';

var dogAge = prompt('¿Cuántos años tiene tu perro?');
dogAge = parseInt(dogAge);
var year1 = 15;
var year2 = 9;
var yourDogAge;
var result;

if (dogAge === 1) {

	result = 'Tu perro tiene ' + year1 + ' años';
} else if (dogAge === 2) {
	result = 'Tu perro tiene ' + (year1 + year2) + ' años';
} else if (dogAge >= 3 ) {
	/*
	Restamos 2 años porque ya tenemos un cálculo fijo de las edades
	correspondientes alos primeros dos años (year1 + year2)
	 */
	yourDogAge = year1 + year2 + ((dogAge - 2) * 5);
	result = 'Tu perro tiene ' + yourDogAge + ' años';
} else {
	result = 'Camina, que tú no tienes perro';
}

alert(result);
