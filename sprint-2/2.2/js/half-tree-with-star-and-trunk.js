'use strict';

var treeHeight = prompt('¿Cuántas líneas tendrá nuestro árbol?');
var treeChar = '▲';
// Esta es la variable que usaremos para crear el árbol, línea a línea
var treeLine = '';
// Usamos unas variables para la estrella y para el tronco
var treeStar = '★'
var treeTrunk = '|';


// Convertimos el número de líneas a número
treeHeight = parseInt(treeHeight);

// Lo primero es pintar la estrella
treeLine = treeStar + '\n';

// Recorremos el árbol línea a línea
for (var i = 0; i < treeHeight; i++ ) {
	// y escribimos las ▲ que necesitemos por línea
	for (var j=0; j <= i; j++) {
		treeLine = treeLine + treeChar;
	}
	// Al final, añadimos un salto de línea
	treeLine = treeLine + '\n';
}

// Y ahora pintamos el tronco
treeLine = treeLine + treeTrunk;

// Y al final del bucle lo pintamos con un alert, yay!
alert(treeLine);
