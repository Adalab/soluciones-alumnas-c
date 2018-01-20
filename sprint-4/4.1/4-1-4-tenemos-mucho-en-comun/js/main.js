'use strict';

const MOVIES = [];

MOVIES[0] = prompt('¿Cuál es tu libro favorito?');
MOVIES[1] = prompt('¿Cuál es tu segundo libro favorito?');

for (let i = 0; i < MOVIES.length; i++) {
  console.log(`¡A mí también me encantó "${MOVIES[i]}"!`);
}
