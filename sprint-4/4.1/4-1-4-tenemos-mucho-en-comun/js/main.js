'use strict';

const MOVIES = [];

MOVIES[0] = prompt('¿Cuál es tu libro favorito?');
MOVIES[1] = prompt('¿Cuál es tu segundo libro favorito?');

for (const movie of MOVIES) {
  console.log(`¡A mí también me encantó "${movie}"!`);
}
