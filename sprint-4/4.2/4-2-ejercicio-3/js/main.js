'use strict';
class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return Math.pow(this.base, 2);
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area(){
    // Área de un triángulo = (base*altura)/2
    return (this.base * this.height) / 2;
    //return (super.area() / 2);
  }
}


// Creamos nuestras instancias de square
// y les pasamos los valores en cada caso
const square = new Square(5);
const triangle = new Triangle(4,3);

// Cuadrado
console.log('Cuadrado de lado 4 m.:')
console.log(`Perímetro: ${square.perimeter()} m.`);
console.log(`Área: ${square.area()} m².`);
console.log('---')
// Cuadrado de lado 1
console.log('Triángulo de 4m. de base y 3 m. altura:')
console.log(`Perímetro: ${triangle.perimeter()} m.`);
console.log(`Área: ${triangle.area()} m².`);
console.log('---')
