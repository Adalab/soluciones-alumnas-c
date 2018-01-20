'use strict';

// Ejercicio 1: Saludos con ES2015
const NAME = prompt('¿Cómo te llamas?');

alert(`Hola, ${NAME}, encantada de conocerte`);


// Ejercicio 2: Interpolación usando innerHTML
const LIST = document.querySelector('.list');
const DOGS = [
  {
    image: 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg',
    name: 'Dina'
  },
  {
    image: 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg',
    name: 'Bobby'
  },
  {
    image: 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg',
    name: 'Lana'
  }
];

let items = '';

for (let i = 0; i < DOGS.length; i++) {
  items += `
    <li class="list__item">
      <h2 class="list__item-name">${DOGS[i].name}</h2>
      <img src="${DOGS[i].image}" class="list__item-image" alt="${DOGS[i].name}" />
    </li>
  `;
}

LIST.innerHTML = items;
