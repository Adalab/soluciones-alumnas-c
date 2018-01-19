'use strict';

class Square {
  // Definimos nuestros atributos
  constructor(side, numberOfSides) {
    this.side = side;
    this.numberOfSides = numberOfSides;
  }
  // Ajustamos el método para que coja los atributos
  perimeter() {
    return this.side * this.numberOfSides;
  }

  // Ajustamos el método para que use los atributos
  area() {
    return Math.pow(this.side,2);
  }
}

// Creamos nuestras instancias de square
// y les pasamos los valores en cada caso
const square1 = new Square(1,4);
const square3 = new Square(3,4);
const square7 = new Square(7,4);

// Cuadrado de lado 1
console.log('Cuadrado de lado 1 m.:')
console.log(`Perímetro: ${square1.perimeter()} m.`);
console.log(`Área: ${square1.area()} m².`);
console.log('---')
// Cuadrado de lado 1
console.log('Cuadrado de lado 3 m.:')
console.log(`Perímetro: ${square3.perimeter()} m.`);
console.log(`Área: ${square3.area()} m².`);
console.log('---')
// Cuadrado de lado 1
console.log('Cuadrado de lado 7 m.:')
console.log(`Perímetro: ${square7.perimeter()} m.`);
console.log(`Área: ${square7.area()} m².`);
