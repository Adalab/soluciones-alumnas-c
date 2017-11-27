'use strict';

var treeHeight = prompt('¿Cuántas líneas tendrá nuestro árbol?');
var treeChar = '▲';
var treeLine = '';
var treeTrunk = '|';
var treeStar = '★';

/*
Vamos a utilizar unos contadores para espacios, triángulos, estellas y troncos
*/
// Las estrellas/triángulos siempre van en número impar
var xCounter = 1;

/*
Los espacios (solo pintaremos los de un lado) son cada vez menos,
desde numeroDeLineas-1 hasta 0
 */
var spCounter = treeHeight - 1;

/*
El tronco y la estrella tienen el mismo número de espacios
que la primera estrella
 */
var bonusSpaces = spCounter;

// Convertimos el número de líneas introducido a número
treeHeight = parseInt(treeHeight);


// Pintamos la estrella
for (var star = 0; star < bonusSpaces; star++) {
	treeLine = treeLine + ' ';
}
// y añadimos un salto de línea
treeLine = treeLine + treeStar + '\n';

// Pintamos el cuerpo del árbol
// Primero recorremos el árbol, línea a línea
for (var i = 0; i < treeHeight; i++) {

	// En cada línea:
	// Pintamos los espacios correspondientes
	for (var sp = spCounter; sp > 0; sp--) {
		treeLine = treeLine + ' ';
	}
	// Ajustamos el contador de espacios
	spCounter = spCounter - 1;

	// y Pintamos los triángulos correspondientes
	for (var x = 0; x < xCounter; x++) {
		treeLine = treeLine + treeChar;
	}
	// y ajustamos el contador de triángulos
	xCounter = xCounter + 2;
	// y añadimos un salto de línea
	treeLine = treeLine + '\n';
}



// Luego pintamos el tronco
for (var t = 0; t < bonusSpaces; t++) {
	treeLine = treeLine + ' ';
}
// y añadimos un salto de línea
treeLine = treeLine + treeTrunk + '\n';

// y lo pintamos
console.log(treeLine);
//alert(treeLine);
