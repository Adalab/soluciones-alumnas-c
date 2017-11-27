'use strict';

var treeHeight = prompt('¿Cuántas líneas tendrá nuestro árbol?');
var treeChar = '▲';
// Esta es la variable que usaremos para crear el árbol, línea a línea
var treeLine = '';

// Convertimos el número de líneas a número
treeHeight = parseInt(treeHeight);

// Recorremos el árbol línea a línea
for (var i = 0; i < treeHeight; i++ ) {
	// y escribimos las ▲ que necesitemos por línea
	for (var j=0; j <= i; j++) {
		treeLine = treeLine + treeChar;
	}
	// Al final, añadimos un salto de línea
	treeLine = treeLine + '\n';
}
// Y al final del bucle lo pintamos con un alert, yay!
alert(treeLine);
