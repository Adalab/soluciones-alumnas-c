'use strict';

/*
Es el momento de encontrar cómo podemos resolver el árbol. Una de las formas es
contar cúantos espacios hay y cuantas hojas en cada uno de las filas para
averiguar cual es la secuencia que podemos usar para crear el árbol. Veámoslo
con un ejemplo de un árbol de 4 filas:

NOTA: El cero no cuenta como espacio y no hace falta pintar espacios a la derecha
del árbol, solo pondremos un salto de línea y con eso nos bastará.

0123*    3 espacios + 1 estrella        + salto de línea
0123▲    3 espacios + 1 parte de árbol  + salto de línea
012▲▲▲   2 espacios + 3 partes de árbol + salto de línea
01▲▲▲▲▲  1 espacio  + 5 partes de árbol + salto de línea
0▲▲▲▲▲▲▲ 0 espacios + 7 partes de árbol + salto de línea
0123|    3 espacios + 1 tronco          + salto de línea

Aquí observamos varias cosas:
- El número de espacios máximo será igual a la altura del árbol (4 pisos) menos
1, y a partir de ahí ira disminuyendo hasta 0, pasaría lo mismo con 5:
- El número de bloques del hojas del árbol a partir de la segunda línea es igual
a 1 y a partir de ahí va sumando de dos en dos por cada nueva linea

01234*
01234▲
0123▲▲▲
012▲▲▲▲▲
01▲▲▲▲▲▲▲
0▲▲▲▲▲▲▲▲▲
01234|

Viendo esto la lógica del programa sería bastante sencilla de hacer "a lo bruto":

1. Pintamos tres espacios en blanco, una estrella y un salto de línea
2. Pintamos tres espacios en blanco, una parte del árbol y un salto de línea
3. Pintamos dos espacios en blanco, tres partes del árbol y un salto de línea
4. Pintamos un espacio en blanco, cinco partes del árbol y un salto de línea
5. Pintamos cero espacios en blanco, siete partes del árbol y un salto de línea
6. Pintamos tres espacios en blanco, un tronco y un salto de línea

Por tanto lo que podemos hacer es que para cada línea:
	1. si es la primera línea, añada tantos espacios como la altura dada menos 1 y
		luego añada la estrella y el salto de línea
	2. Entre la segunda y la penúltima linea empiece con tantos espacios como la
		altura dada menos 1, luego añada 1 bloque de hojas del árbol y al final un
		salto de línea
	3. Cada paso siguiente resta 1 espacio y suma 2 triángulos del árbol a los que
		ha pintado en el paso anterior y se repita el paso 2
	4. Para el último paso repetimos el paso 1 pero cambiando la estrella por el
	   tronco
	5. Por último, pintamos el código

¡Vamos al lio!
*/

/*
Obtenemos la información de la altura que quiere el usuario para el árbol y
definimos variables con los símbolos para representar cada una de las partes del
árbol. Por último creamos la variable result donde iremos añadiendo el texto para
representar el árbol.
*/

var heightInputValue = prompt('¿Cuántas líneas tendrá nuestro árbol?');
var height = parseInt(heightInputValue);
var space = ' ';
var star = '★';
var newLine = '\n';
var leaf = '▲';
var trunk = '|';
var result = '';
var totalSpaces = height - 1;

/*
1. si es la primera línea, añada tantos espacios como la altura dada menos 1 y
	luego añada la estrella y el salto de línea
*/

// Añadimos tantos espacios como altura dada por el usuario menos 1
for (var i = 0; i < totalSpaces; i++) {
	result += space;
}

// Luego añadimos la estrella y el salto de línea
result += star + newLine;

/*
2. Entre la segunda y la última linea empiece con tantos espacios como la
	altura dada menos 1, luego añada 1 bloque de hojas del árbol y al final un
	salto de línea
*/

var currentSpaces = totalSpaces;
var currentLeafs = 1;

for (var i = 0; i < height; i++) {
	for (var j = 0; j < currentSpaces; j++) {
		result += space;
	}

	for (var k = 0; k < currentLeafs; k++) {
		result += leaf;
	}

	result += newLine;

	/*
	3. Cada paso siguiente resta 1 espacio y suma 2 triángulos del árbol a los que
		ha pintado en el paso anterior y se repita el paso 2
	*/
	currentSpaces -= 1;
	currentLeafs += 2;
}

// Añadimos tantos espacios como altura dada por el usuario menos 1
for (var i = 0; i < totalSpaces; i++) {
	result += space;
}

// Luego añadimos la estrella y el salto de línea
result += trunk + newLine;

/*
Utilizamos console.log para que muestre una fuente monoespaciada. Con alert el
árbol saldría raro porque la fuente no es monoespaciada y las letras no ocupan
el mismo espacio
*/
console.log(result);
