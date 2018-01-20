'use strict';
var list = document.querySelector('.list');
var dogs = [
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

var items = '';

for (var i = 0; i < dogs.length; i++) {
  items += `
    <li class="list__item">
      <h2 class="list__item-name">${dogs[i].name}</h2>
      <img src="${dogs[i].image}" class="list__item-image" alt="${dogs[i].name}" />
    </li>
  `;
}

list.innerHTML = items;
