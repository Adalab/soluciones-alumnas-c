'use strict';
const CLASS = [
  {
    name: 'María',
    age: 29,
    career: 'Diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    career: 'Ingeniera química'
  },
  {
    name: 'Susana',
    age: 34,
    career: 'Periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    career: 'Actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    career: 'Diseñadora'
   }
]

// Soluciones con bucle FOR
function countAdalabers(adalabersList) {
  let counter = 0;
  for (const item of adalabersList) {
    counter++;
  }
  return counter;
}

function averageAge(adalabersList) {
  const TOTAL_ADALABERS = countAdalabers(adalabersList);
  let SUM_AGES = 0;
  for (const item of adalabersList) {
    SUM_AGES += item.age;
  }
  return SUM_AGES / TOTAL_ADALABERS;
}

function theYoungest(adalabersList) {
  let YOUNGESTADALABER = adalabersList[0];
  for (const item of adalabersList) {
    if (item.age < YOUNGESTADALABER.age) {
      YOUNGESTADALABER = item;
    }
  }
  return YOUNGESTADALABER;
}
const YOUNGEST = theYoungest(CLASS);

function countDesigners(adalabersList) {
  let DESIGNERS = 0;
  for (const item of adalabersList) {
    if (item.career === 'Diseñadora') {
      DESIGNERS++;
    }
  }
  return DESIGNERS;
}


console.log(`> El número total de Adalabers es ${countAdalabers(CLASS)}`);
console.log(`> La edad media de la clase son ${averageAge(CLASS)} años`);
console.log(`> La alumna más joven es ${YOUNGEST.name} con ${YOUNGEST.age} años`);
console.log(`De todas las alumnas hay ${countDesigners(CLASS)} diseñadoras`);

/* soluciones sin bucle FOR
function countAdalabers(adalabersList) {
  return adalabersList.length;
}

function averageAge(adalabersList) {
  const TOTAL_ADALABERS = countAdalabers(adalabersList);
  const SUM_AGE = adalabersList.reduce(function(total, item){
    total += item.age
    return total;
  },0);
  return SUM_AGE / TOTAL_ADALABERS;
}

function theYoungest(adalabersList) {
  const YOUNGESTADALABER = adalabersList.reduce(function(youngest, item){
    let candidate = youngest;
    if (item.age < youngest.age) {
      candidate = item;
    }
    return candidate;
  });
  return YOUNGESTADALABER;
}
const YOUNGEST = theYoungest(CLASS);

function countDesigners(adalabersList) {
  const DESIGNERS = adalabersList.filter(function(item){
    if (item.career === 'Diseñadora') {
      return item
    }
  });
  return DESIGNERS.length;
}
*/
